const router = require('express').Router();
const bcrypt = require('bcrypt');
const signUtils = require('../../utils/signUtils');
const jwtConfig = require('../../config/jwtConfig');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    const response = { message: 'success', users };
    res.json(response);
  } catch ({ message }) {
    res.json({ message });
  }
});
router.put('/plus/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { cost } = req.body;
    const user = await User.findOne({ where: { id } });
    const newScores = +user.scores + +cost;
    await User.update({ scores: newScores }, { where: { id } });
    const response = { message: 'success', scores: newScores };
    res.json(response);
  } catch ({ message }) {
    res.json({ message });
  }
});
router.put('/minus/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { cost } = req.body;
    const user = await User.findOne({ where: { id } });
    const newScores = +user.scores - +cost;
    await User.update({ scores: newScores }, { where: { id } });
    const response = { message: 'success', scores: newScores };
    res.json(response);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/in', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (email.trim() === '' || password.trim() === '') {
      res.json({ message: 'Заполните поля корректно' });
      return;
    }
    if (email.trim().length !== email.length || email.replace(' ', '').length !== email.length) {
      res.json({ message: 'E-mail не должен содержать пробелов' });
      return;
    }
    if (password.trim().length !== password.length || password.replace(' ', '').length !== password.length) {
      res.json({ message: 'Пароль не должен содержать пробелов' });
      return;
    }
    if (!user) {
      res.json({ message: 'Такого пользователя не существует' });
      return;
    }
    const passTest = await bcrypt.compare(password, user.password);
    if (!passTest) {
      res.json({ message: 'Пароль не совпадает' });
    } else {
      const { accessToken, refreshToken } = signUtils({
        user: {
          id: user.id, email: user.email, name: user.name, role: user.role,
        },
      });
      res.locals.user = user;
      res
        .cookie(jwtConfig.refresh.type, refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .cookie(jwtConfig.access.type, accessToken, {
          maxAge: jwtConfig.access.expiresIn,
          httpOnly: true,
        });

      res.json({ message: 'success', user });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/up', async (req, res) => {
  try {
    const {
      email, password, r_password, name,
    } = req.body;
    const user = await User.findOne({ where: { email } });
    if (email.trim() === '' || password.trim() === '') {
      res.json({ message: 'Заполните поля корректно' });
      return;
    }
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailCheck = pattern.test(email);
    if (!emailCheck) {
      res.json({ message: 'Некорректно заполнен e-mail' });
      return;
    }
    if (password.trim().length !== password.length || password.replace(' ', '').length !== password.length || r_password.trim().length !== r_password.length || r_password.replace(' ', '').length !== r_password.length) {
      res.json({ message: 'Пароль или повтор пароля не должен содержать пробелов' });
      return;
    }
    if (user) {
      res.json({ message: 'Такой e-mail занят' });
      return;
    }
    if (password !== r_password) {
      res.json({ message: 'Пароль не совпадает' });
    } else {
      const newUser = await User.create({
        email,
        password: await bcrypt.hash(password, 10),
        name,
        scores: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const { accessToken, refreshToken } = signUtils({
        user: {
          id: newUser.id, email: newUser.email, name: newUser.name,
        },
      });

      res.locals.user = newUser;
      res
        .cookie(jwtConfig.refresh.type, refreshToken, {
          maxAge: jwtConfig.refresh.expiresIn,
          httpOnly: true,
        })
        .cookie(jwtConfig.access.type, accessToken, {
          maxAge: jwtConfig.access.expiresIn,
          httpOnly: true,
        });

      res.json({ message: 'success', user: newUser });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/out', async (req, res) => {
  try {
    const user = {
      id: 0,
      email: '',
      password: '',
      name: '',
      createdAt: '',
      updatedAt: '',
    };
    res
      .clearCookie(jwtConfig.access.type)
      .clearCookie(jwtConfig.refresh.type);
    res.json({ message: 'success', user });
  } catch ({ message }) {
    console.log(message);
  }
});

router.get('/check', async (req, res) => {
  try {
    if (res.locals.user) {
      const user = await User.findOne({ where: { id: res.locals.user.id } });
      res.json({ user });
    }
  } catch ({ message }) {
    res.json(message);
  }
});

module.exports = router;

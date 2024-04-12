const router = require('express').Router();
const bcrypt = require('bcrypt');
const signUtils = require('../../utils/signUtils');
const jwtConfig = require('../../config/jwtConfig');
const {User} = require('../../db/models')
const { Op } = require('sequelize');

// router.get('/', async (req, res) => {
//   try {
//     const users = await User.findAll();
//     const response = { message: 'success', users };
//     res.json(response);
//   } catch ({ message }) {
//     res.json({ message });
//   }
// });

router.post('/authorization', async (req, res) => {
  let user;
  try {
    const { email, password } = req.body;

    if (email.trim() === '' || password.trim() === '') {
      res.json({ message: 'Заполните поля корректно' });
      return;
    }
    if (
      email.trim().length !== email.length ||
      email.replace(' ', '').length !== email.length
    ) {
      res.json({ message: 'E-mail не должен содержать пробелов' });
      return;
    }
    if (
      password.trim().length !== password.length ||
      password.replace(' ', '').length !== password.length
    ) {
      res.json({ message: 'Пароль не должен содержать пробелов' });
      return;
    }

    const user = await User.findOne({
      where: {
        [Op.or]: [{ email }, { login: email }],
      },
      attributes: ['id', 'email', 'login'],
    });

    if (!user) {
      res.json({ message: 'Такого пользователя нет или пароль неверный' });
      return;
    }
    const passTest = await bcrypt.compare(password, user.password);
    if (!passTest) {
      res.json({ message: 'Такого пользователя нет или пароль неверный' });
    } else {
      const { accessToken, refreshToken } = signUtils({
        user: {
          id: user.id,
          email: user.email,
          login: user.login,
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

router.post('/registration', async (req, res) => {
  try {
    const { email, password, r_password, login } = req.body;

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
    const invalidCharacters = /[@#$%^&*()-_+=|\\:;"'<,>.?/~]/;
    if (
      login.trim().length !== login.length ||
      login.replace(' ', '').length !== login.length ||
      invalidCharacters.test(login)
    ) {
      res.json({ message: 'Login не должен содержать пробелов или специальных символов' });
      return;
    }

    if (
      password.trim().length !== password.length ||
      password.replace(' ', '').length !== password.length ||
      r_password.trim().length !== r_password.length ||
      r_password.replace(' ', '').length !== r_password.length
    ) {
      res.json({
        message: 'Пароль или повтор пароля не должен содержать пробелов',
      });
      return;
    }

    const userEmail = await User.findOne({ where: { email } });
    if (userEmail) {
      res.json({ message: 'Пользователь с таким email уже существует!' });
      return;
    }

    const userLogin = await User.findOne({ where: { login } });
    if (userLogin) {
      res.json({ message: 'Пользователь с таким login уже существует!' });
      return;
    }

    if (password !== r_password) {
      res.json({ message: 'Пароли не совпадают!' });
    } else {
      const newUser = await User.create({
        email,
        password: await bcrypt.hash(password, 10),
        login,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const user = await newUser.findOne({
        where: { id: newUser.id },
        attributes: ['id', 'email', 'login'],
      });
      const { accessToken, refreshToken } = signUtils({ user });

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

      res.json({ message: 'success', user: user });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});
router.get('/logout', (req, res) => {
  try {
    res.clearCookie(jwtConfig.access.type).clearCookie(jwtConfig.refresh.type);
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/check', async (req, res) => {
  try {
    if (res.locals.user) {
      const user = await User.findOne({
        where: { id: res.locals.user.id },
        attributes: ['id', 'email', 'login'],
      });
      res.json({ user });
      return;
    }
    res.json({ message: 'Сначала войдите в свой аккаунт' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;

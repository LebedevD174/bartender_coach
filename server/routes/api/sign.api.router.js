const router = require('express').Router();
const bcrypt = require('bcrypt');
const signUtils = require('../../utils/signUtils');
const jwtConfig = require('../../config/jwtConfig');
const { User, Profile } = require('../../db/models');
const { Op } = require('sequelize');

router.post('/authorization', async (req, res) => {
  let user;
  try {
    const { email, password } = req.body;

    if (email.trim() === '' || password.trim() === '') {
      res.status(400).json({ message: 'Заполните поля корректно' });
      return;
    }
    if (
      email.trim().length !== email.length ||
      email.replace(' ', '').length !== email.length
    ) {
      res.status(400).json({ message: 'E-mail не должен содержать пробелов' });
      return;
    }
    if (
      password.trim().length !== password.length ||
      password.replace(' ', '').length !== password.length
    ) {
      res.status(400).json({ message: 'Пароль не должен содержать пробелов' });
      return;
    }

    const user = await User.findOne({
      where: {
        [Op.or]: [{ email }, { login: email }],
      },
      attributes: ['id', 'email', 'login', 'password'],
    });
    if (!user) { 
      res.status(400).json({ 
          message: 'Такого пользователя нет', 
      }) 
      return 
  }
    const passTest = await bcrypt.compare(password, user.password);
    if (!passTest) {
      res.status(400).json({ message: 'Пароль неверный' });
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
      res.status(200).json({ message: 'success', user });
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/registration', async (req, res) => {
  try {
    const { email, password, checkPassword, login } = req.body;

    if (email.trim() === '' || password.trim() === '') {
      res.status(400).json({ message: 'Заполните поля корректно' });
      return;
    }
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailCheck = pattern.test(email);
    if (!emailCheck) {
      res.status(400).json({ message: 'Некорректно заполнен e-mail' });
      return;
    }
    const invalidCharacters = /[@#$%^&*()-_+=|\\:;"'<,>.?/~]/;
    console.log(login.trim().length === login.length ||
    login.replace(' ', '').length === login.length ||
    invalidCharacters.test(login));
    if (
      login.trim().length !== login.length ||
      login.replace(' ', '').length !== login.length ||
      !invalidCharacters.test(login)
    ) {
      res.status(400).json({
        message: 'Login не должен содержать пробелов или специальных символов',
      });
      return;
    }
    console.log(password.trim().length !== password.length ||
    password.replace(' ', '').length !== password.length ||
    checkPassword.trim().length !== checkPassword.length ||
    checkPassword.replace(' ', '').length !== checkPassword.length);
    if (
      password.trim().length !== password.length ||
      password.replace(' ', '').length !== password.length ||
      checkPassword.trim().length !== checkPassword.length ||
      checkPassword.replace(' ', '').length !== checkPassword.length
    ) {
      res.status(400).json({
        message: 'Пароль или повтор пароля не должен содержать пробелов',
      });
      return;
    }

    const userEmail = await User.findOne({ where: { email } });
    if (userEmail) {
      res.status(400).json({ message: 'Пользователь с таким email уже существует!' });
      return;
    }

    const userLogin = await User.findOne({ where: { login } });
    if (userLogin) {
      res.status(400).json({ message: 'Пользователь с таким login уже существует!' });
      return;
    }

    if (password !== checkPassword) {
      res.status(400).json({ message: 'Пароли не совпадают!' });
    } else {
      const newUser = await User.create({
        email,
        password: await bcrypt.hash(password, 10),
        login,
        isAdmin:false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await Profile.create({ createdAt: new Date(), updatedAt: new Date() });

      const user = await User.findOne({
        where: { id: newUser.id },
        attributes: ['id', 'email', 'login', 'password'],
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
      res.status(200).json({ message: 'success', user: user });
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

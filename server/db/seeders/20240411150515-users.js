'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    const hash = await bcrypt.hash('asdF12315', 10);
    const usersData = [
      {
        login: 'admin',
        email: 'admin@mail.ru',
        password: hash,
      },
      {
        login: 'valera',
        email: 'valera@mail.ru',
        password: hash,
      },
      {
        login: 'maria',
        email: 'maria@mail.ru',
        password: hash,
      },
      {
        login: 'dima',
        email: 'dima@mail.ru',
        password: hash,
      },
      {
        login: 'danya',
        email: 'danya@mail.ru',
        password: hash,
      },
    ];

    const users = usersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Users', users);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};

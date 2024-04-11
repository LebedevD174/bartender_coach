'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');
module.exports = {
  async up(queryInterface, Sequelize) {
    const hash = await bcrypt.hash('123', 10);
    const usersData = [
      {
        login: 'Admin',
        email: 'admin@mail.ru',
        password: hash,
      },
      {
        login: 'ValeraWolf',
        email: 'valera@mail.ru',
        password: hash,
      },
      {
        login: 'Maria',
        email: 'maria@mail.ru',
        password: hash,
      },
      {
        login: 'DimaBear',
        email: 'dima@mail.ru',
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

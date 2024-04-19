'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const profilesData = [
      {
        name: 'Анатолий',
        lastName: 'Башкатов',
        age: 33,
        phoneNumber: null,
        img: '/img/admin.jpg',
        isAdmin: true,
      },
      {
        name: 'Валерий',
        lastName: 'Супер',
        age: 23,
        phoneNumber: null,
        img: 'https://klike.net/uploads/posts/2023-01/1674376895_3-19.jpg',
        isAdmin: false,
      },
      {
        name: 'Мария',
        lastName: 'Марковка',
        age: 24,
        phoneNumber: null,
        img: 'https://i.pinimg.com/originals/d1/be/8f/d1be8fe517d190dd3d318bde5e563f8c.jpg',
        isAdmin: false,
      },
      {
        name: 'Дмитрий',
        lastName: 'Крут',
        age: 26,
        phoneNumber: 1111111111,
        img: 'https://cdn1.ozone.ru/s3/multimedia-n/c600/6254352551.jpg',
        isAdmin: false,
      },
    ];

    const profiles = profilesData.map((profile) => ({
      ...profile,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Profiles', profiles);
  },

  async down(queryInterface, Sequelize) {
    await Profile.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};

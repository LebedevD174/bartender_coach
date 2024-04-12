'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const featuresData = [
      {
        title: 'Горький',
      },
      {
        title: 'Кислый',
      },
      {
        title: 'Острый',
      },
      {
        title: 'Ореховый',
      },
      {
        title: 'Цветочный',
      },
      {
        title: 'Ягодный',
      },
    ];

    const features = featuresData.map((feature) => ({
      ...feature,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Features', features);
  },

  async down(queryInterface, Sequelize) {
    await Feature.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};

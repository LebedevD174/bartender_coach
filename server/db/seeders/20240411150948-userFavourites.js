'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const userFavorsData = [
      {
        user_id: 2,
        cocktail_id: 2,
      },
      {
        user_id: 3,
        cocktail_id: 3,
      },
      {
        user_id: 2,
        cocktail_id: 4,
      },
      {
        user_id: 2,
        cocktail_id: 1,
      },
    ];

    const userFavors = userFavorsData.map((userFavor) => ({
      ...userFavor,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('UserFavourites', userFavors);
  },

  async down(queryInterface, Sequelize) {
    await UserFavourite.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};

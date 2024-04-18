'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cocktailsFeaturesData = [
      {
        cocktail_id: 1,
        feature_id: 2,
      },
      {
        cocktail_id: 1,
        feature_id: 7,
      },
      {
        cocktail_id: 1,
        feature_id: 8,
      },
      {
        cocktail_id: 2,
        feature_id: 9,
      },
      {
        cocktail_id: 2,
        feature_id: 10,
      },
      {
        cocktail_id: 2,
        feature_id: 11,
      },
      {
        cocktail_id: 3,
        feature_id: 1,
      },
      {
        cocktail_id: 4,
        feature_id: 7,
      },
      {
        cocktail_id: 5,
        feature_id: 7,
      },
      {
        cocktail_id: 5,
        feature_id: 2,
      },
      {
        cocktail_id: 6,
        feature_id: 1,
      },
      {
        cocktail_id: 6,
        feature_id: 7,
      },
      {
        cocktail_id: 7,
        feature_id: 9,
      },
      {
        cocktail_id: 7,
        feature_id: 9,
      },
      {
        cocktail_id: 8,
        feature_id: 9,
      },
      {
        cocktail_id: 8,
        feature_id: 11,
      },
      {
        cocktail_id: 9,
        feature_id: 9,
      },
    ];

    const cocktailsFeatures = cocktailsFeaturesData.map((userFavor) => ({
      ...userFavor,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('CocktailFeatures', cocktailsFeatures);
  },

  async down(queryInterface, Sequelize) {
    await CocktailFeature.destroy({
      truncate: {
        cascade: true,
      },
    });
  },
};

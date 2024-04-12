'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cocktailsFeaturesData = [
      {
        cocktail_id: 1,
        feature_id: 1,
      },
      {
        cocktail_id: 1,
        feature_id: 3,
      },
      {
        cocktail_id: 1,
        feature_id: 5,
      },
      {
        cocktail_id: 2,
        feature_id: 1,
      },
      {
        cocktail_id: 2,
        feature_id: 4,
      },
      {
        cocktail_id: 3,
        feature_id: 1,
      },
      {
        cocktail_id: 3,
        feature_id: 3,
      },
      {
        cocktail_id: 4,
        feature_id: 1,
      },
      {
        cocktail_id: 4,
        feature_id: 6,
      },
      {
        cocktail_id: 5,
        feature_id: 3,
      },
      {
        cocktail_id: 5,
        feature_id: 1,
      },
      {
        cocktail_id: 5,
        feature_id: 6,
      },
      {
        cocktail_id: 6,
        feature_id: 2,
      },
      {
        cocktail_id: 6,
        feature_id: 5,
      },
      {
        cocktail_id: 6,
        feature_id: 4,
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

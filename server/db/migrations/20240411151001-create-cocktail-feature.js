'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CocktailFeatures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cocktail_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cocktails',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      feature_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Features',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CocktailFeatures');
  }
};
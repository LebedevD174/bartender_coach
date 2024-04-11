'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Formulas', {
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
      barware_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Barwares',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      drink_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Drinks',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      drinks_volume: {
        type: Sequelize.INTEGER
      },
      tech_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teches',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      ingredient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredients',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      ingredient_volume: {
        type: Sequelize.INTEGER
      },
      order: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Formulas');
  }
};
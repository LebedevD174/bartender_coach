'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Formula }) {
      this.hasMany(Formula, { foreignKey: 'ingredient_id' });
    }
  }
  Ingredient.init({
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    measure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};
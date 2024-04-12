'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate({ Formula }) {
      this.hasMany(Formula, { foreignKey: 'ingredient_id' });
    }
  }
  Ingredient.init({
    title: DataTypes.STRING,
    img: DataTypes.TEXT,
    measure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};
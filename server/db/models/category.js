'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Drink }) {
      this.hasMany(Drink, { foreignKey: 'category_id' });
    }
  }
  Category.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
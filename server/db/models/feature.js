'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    static associate({ CocktailFeature }) {
      this.hasMany(CocktailFeature, { foreignKey: 'feature_id' });
    }
  }
  Feature.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feature',
  });
  return Feature;
};
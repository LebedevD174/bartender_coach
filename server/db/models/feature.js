'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
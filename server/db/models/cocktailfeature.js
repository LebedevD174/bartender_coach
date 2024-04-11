'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CocktailFeature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Feature, Cocktail }) {
      this.belongsTo(Cocktail, { foreignKey: 'cocktail_id' });
      this.belongsTo(Feature, { foreignKey: 'feature_id' });
    }
  }
  CocktailFeature.init({
    cocktail_id: DataTypes.INTEGER,
    feature_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CocktailFeature',
  });
  return CocktailFeature;
};
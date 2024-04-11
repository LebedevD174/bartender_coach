const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Formula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Cocktail, Barware, Drink, Tech, Ingredient,
    }) {
      this.belongsTo(Cocktail, { foreignKey: 'cocktail_id' });
      this.belongsTo(Barware, { foreignKey: 'barware_id' });
      this.belongsTo(Drink, { foreignKey: 'drink_id' });
      this.belongsTo(Tech, { foreignKey: 'tech_id' });
      this.belongsTo(Ingredient, { foreignKey: 'ingredient_id' });
    }
  }
  Formula.init({
    cocktail_id: DataTypes.INTEGER,
    barware_id: DataTypes.INTEGER,
    drink_id: DataTypes.INTEGER,
    drinks_volume: DataTypes.INTEGER,
    tech_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER,
    ingredient_volume: DataTypes.INTEGER,
    order: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Formula',
  });
  return Formula;
};

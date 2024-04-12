'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drink extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Formula, Category }) {
      this.hasMany(Formula, { foreignKey: 'drink_id' });
      this.belongsTo(Category, { foreignKey: 'category_id' });
    }
  }
  Drink.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drink',
  });
  return Drink;
};
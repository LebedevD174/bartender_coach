'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barware extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Formula }) {
      this.hasMany(Formula, { foreignKey: 'barware_id' });
    }
  }
  Barware.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Barware',
  });
  return Barware;
};
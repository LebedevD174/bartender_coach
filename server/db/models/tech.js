'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Formula }) {
      this.hasMany(Formula, { foreignKey: 'tech_id' });
    }
  }
  Tech.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tech',
  });
  return Tech;
};
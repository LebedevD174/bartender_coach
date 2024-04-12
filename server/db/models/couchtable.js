'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CouchTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  
  CouchTable.init({
    user_id: DataTypes.INTEGER,
    scores: DataTypes.INTEGER,
    status: DataTypes.STRING,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CouchTable',
  });
  return CouchTable;
};
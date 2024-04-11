'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Profile, CouchTable,UserFavourite,Cocktail }) {
      this.hasOne(Profile, { foreignKey: 'id' });
      this.hasMany(CouchTable, { foreignKey: 'user_id' });
      this.hasMany(UserFavourite, { foreignKey: 'user_id' });
      this.hasMany(Cocktail, { foreignKey: 'user_id' });
    }
  }
  User.init({
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
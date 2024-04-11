const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserFavourite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Cocktail }) {
      this.belongsTo(Cocktail, { foreignKey: 'cocktail_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  UserFavourite.init({
    user_id: DataTypes.INTEGER,
    cocktail_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserFavourite',
  });
  return UserFavourite;
};

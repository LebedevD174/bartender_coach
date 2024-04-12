const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cocktail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ UserFavourite, User, CocktailFeature, Formula }) {
      this.hasMany(UserFavourite, { foreignKey: 'cocktail_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(CocktailFeature, { foreignKey: 'cocktail_id' });
      this.hasMany(Formula, { foreignKey: 'cocktail_id' });
    }
  }
  Cocktail.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.STRING,
    status:DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Cocktail',
  });
  return Cocktail;
};

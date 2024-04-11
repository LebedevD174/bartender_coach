const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question }) {
      // define association here
      this.hasMany(Question, { foreignKey: 'cost_id' });
    }
  }
  Cost.init({
    cost: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Cost',
  });
  return Cost;
};

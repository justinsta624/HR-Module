const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class role extends Model {}

role.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 30],
    },
  },
  salary: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      len: [4, 10],
    },
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "department",
      key: "id",
    },
  },

  sequelize,
  freezeTableName: true,
  modelName: "department",
});

module.exports = role;

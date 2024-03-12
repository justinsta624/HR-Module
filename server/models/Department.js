const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class department extends Model {}

department.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "department",
  }
);

module.exports = department;

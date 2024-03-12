const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class employee extends Model {}

employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      References: {
        model: "role",
        key: "id",
      },
    },
  },

  {
    sequelize,
    freezeTableName: true,
    modelName: "employee",
  }
);

module.exports = employee;

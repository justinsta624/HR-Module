const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Role extends Model { }

Role.init(
  {
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
      references: {
        model: "department",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "role",
  }
);

module.exports = Role;

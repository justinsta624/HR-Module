const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Employee extends Model {}

Employee.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
        isEmail: true,
      },
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [3, 10],
      },
    },
    is_manager: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      /*   References: {
        model: "role",
        key: "id",
      }, */
    },
    // department_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "department",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "employee",
  }
);

module.exports = Employee;

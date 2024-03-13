const User = require("./User");
const Department = require("./Department");
const Role = require("./Role");
const Employee = require("./Employee");

Department.hasMany(User, {
  foreignKey: "department_id",
});

User.belongsTo(Department, {
  foreignKey: "department_id",
});
Employee.belongsTo(Role, {
  foreignKey: "role_id",
});

Role.belongsTo(Department, {
  foreignKey: "department_id",
});

Department.hasMany(Role, {
  foreignKey: "department_id",
});

module.exports = { User, Department, Role, Employee };

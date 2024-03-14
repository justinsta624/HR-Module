const User = require("./User");
const Department = require("./Department");
const Role = require("./Role");
const Employee = require("./Employee");

User.hasMany(Department, {
  foreignKey: 'user_id',
});

Department.belongsTo(User, {
  foreignKey: 'user_id',
});

Department.hasMany(Role, {
  foreignKey: 'department_id',
});

Role.belongsTo(Department, {
  foreignKey: 'department_id',
});

Role.hasMany(Employee, {
  foreignKey: 'role_id',
});

Department.hasMany(User, {
  foreignKey: "department_id",
});

User.belongsTo(Department, {
  foreignKey: "department_id",
});

Role.hasMany(Employee, {
  foreignKey: "role_id",
});

// Department.hasMany(Employee, {
//   foreignKey: "department_id",
// });

Employee.belongsTo(Role, {
  foreignKey: "role_id",
});

Role.belongsTo(Department, {
  foreignKey: "department_id",
});

Department.hasMany(Role, {
  foreignKey: "department_id",
});

// Employee.belongsTo(Department, {
//   foreignKey: "department_id",
// });

User.hasMany(Department, {
  foreignKey: 'user_id',
});

// User.hasMany(Employee, {
//   foreignKey: 'user_id',
// });

// Department.belongsTo(User, {
//   foreignKey: 'user_id',
// });

Department.hasMany(Role, {
  foreignKey: 'department_id',
});

// Department.hasMany(Employee, {
//   foreignKey: 'department_id',
// });

Role.belongsTo(Department, {
  foreignKey: 'department_id',
});

Role.hasMany(Employee, {
  foreignKey: 'role_id',
});

// Employee.belongsTo(Department, {
//   foreignKey: 'department_id',
// });

// Employee.belongsTo(Role, {
//   foreignKey: 'role_id',
// });


module.exports = { User, Department, Role, Employee };
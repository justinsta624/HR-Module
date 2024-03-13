const User = require('./User');
const Department = require('./Department');
const Role = require('./Role');
const Employee = require('./Employee');

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

module.exports = { User, Department, Role, Employee };

import User, { belongsTo } from "./User";
import Department, { hasMany } from "./Department";
import Role, { belongsTo as _belongsTo } from "./Role";
import { belongsTo as __belongsTo } from "./Employee";

hasMany(User, {
  foreignKey: "department_id",
});

belongsTo(Department, {
  foreignKey: "department_id",
});
__belongsTo(Role, {
  foreignKey: "role_id",
});

_belongsTo(Department, {
  foreignKey: "department_id",
});

hasMany(Role, {
  foreignKey: "department_id",
});

export default { User, Department, Role, Employee };

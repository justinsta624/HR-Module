const sequelize = require('../config/connection');

const seedUsers = require('./userData');
const seedDepartments = require('./departmentData');
const seedRoles = require('./roleData');
// const seedEmployees = require('./employeeData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedDepartments();
  console.log('\n----- DEPARTMENTS SEEDED -----\n');

  await seedRoles();
  console.log('\n----- ROLES SEEDED -----\n');

  // await seedEmployees();
  // console.log('\n----- EMPLOYEES SEEDED -----\n');

  process.exit(0);
}

seedDatabase();
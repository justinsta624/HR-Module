const { Department } = require("../models");

const departmentSeedData = [
  {
    name: "Engineering",
    user_id: 1,
  },
  {
    name: "Marketing",
    user_id: 1,
  },
  {
    name: "Human Resources",
    user_id: 1,
  },
  // Add more departments as needed
];

const seedDepartments = () => Department.bulkCreate(departmentSeedData);

module.exports = seedDepartments;

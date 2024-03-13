const { Role } = require("../models");

const roleSeedData = [
  {
    title: "Software Engineer",
    salary: 100000,
    department_id: 1
  },
  {
    title: "Marketing Manager",
    salary: 80000,
    department_id: 2
  },
  {
    title: "HR Specialist",
    salary: 60000,
    department_id: 3
  },
  // Add more roles as needed
];

const seedRoles = () => Role.bulkCreate(roleSeedData);

module.exports = seedRoles;

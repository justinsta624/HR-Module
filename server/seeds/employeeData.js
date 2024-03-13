const { Employee } = require("../models");

const employeeSeedData = [
  {
    first_name: "John",
    last_name: "Doe",
    role_id: 1
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    role_id: 2
  },
  {
    first_name: "Michael",
    last_name: "Johnson",
    role_id: 3
  },
  // Add more employees as needed
];

const seedEmployees = () => Employee.bulkCreate(employeeSeedData);

module.exports = seedEmployees;

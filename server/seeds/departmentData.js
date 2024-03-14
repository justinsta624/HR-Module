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
  {
    name: "Finance",
    user_id: 1,
  },
  {
    name: "Sales",
    user_id: 1,
  },
  {
    name: "Customer Support",
    user_id: 1,
  },
  {
    name: "Research and Development",
    user_id: 1,
  },
  {
    name: "Product Management",
    user_id: 1,
  },
  {
    name: "Legal",
    user_id: 1,
  },
  {
    name: "Information Technology",
    user_id: 1,
  },
  {
    name: "Operations",
    user_id: 1,
  },
  {
    name: "Quality Assurance",
    user_id: 1,
  },
  {
    name: "Design",
    user_id: 1,
  },
  {
    name: "Public Relations",
    user_id: 1,
  },
  {
    name: "Supply Chain",
    user_id: 1,
  },
];

const seedDepartments = () => Department.bulkCreate(departmentSeedData);

module.exports = seedDepartments;

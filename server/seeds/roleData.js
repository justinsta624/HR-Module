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
  {
    title: "Finance Analyst",
    salary: 75000,
    department_id: 4
  },
  {
    title: "Sales Representative",
    salary: 70000,
    department_id: 5
  },
  {
    title: "Customer Support Representative",
    salary: 55000,
    department_id: 6
  },
  {
    title: "Research Scientist",
    salary: 95000,
    department_id: 7
  },
  {
    title: "Product Manager",
    salary: 90000,
    department_id: 8
  },
  {
    title: "Legal Counsel",
    salary: 110000,
    department_id: 9
  },
  {
    title: "IT Specialist",
    salary: 85000,
    department_id: 10
  },
  {
    title: "Operations Manager",
    salary: 85000,
    department_id: 11
  },
  {
    title: "Quality Assurance Engineer",
    salary: 75000,
    department_id: 12
  },
  {
    title: "Graphic Designer",
    salary: 60000,
    department_id: 13
  },
  {
    title: "Public Relations Specialist",
    salary: 70000,
    department_id: 14
  },
  {
    title: "Supply Chain Manager",
    salary: 90000,
    department_id: 15
  },
];

const seedRoles = () => Role.bulkCreate(roleSeedData);

module.exports = seedRoles;

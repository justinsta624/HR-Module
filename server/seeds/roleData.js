const { Role } = require("../models");

const roleSeedData = [
  {
    title: "Software Engineer",
    department_id: 1
  },
  {
    title: "Marketing Manager",
    department_id: 2
  },
  {
    title: "HR Specialist",
    department_id: 3
  },
  {
    title: "Finance Analyst",
    department_id: 4
  },
  {
    title: "Sales Representative",
    department_id: 5
  },
  {
    title: "Customer Support Representative",
    department_id: 6
  },
  {
    title: "Research Scientist",
    department_id: 7
  },
  {
    title: "Product Manager",
    department_id: 8
  },
  {
    title: "Legal Counsel",
    department_id: 9
  },
  {
    title: "IT Specialist",
    department_id: 10
  },
  {
    title: "Operations Manager",
    department_id: 11
  },
  {
    title: "Quality Assurance Engineer",
    department_id: 12
  },
  {
    title: "Graphic Designer",
    department_id: 13
  },
  {
    title: "Public Relations Specialist",
    department_id: 14
  },
  {
    title: "Supply Chain Manager",
    department_id: 15
  },
];

const seedRoles = () => Role.bulkCreate(roleSeedData);

module.exports = seedRoles;

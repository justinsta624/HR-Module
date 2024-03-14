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
  {
    first_name: "Emily",
    last_name: "Brown",
    role_id: 4
  },
  {
    first_name: "David",
    last_name: "Williams",
    role_id: 5
  },
  {
    first_name: "Sarah",
    last_name: "Anderson",
    role_id: 6
  },
  {
    first_name: "Matthew",
    last_name: "Taylor",
    role_id: 7
  },
  {
    first_name: "Amanda",
    last_name: "Martinez",
    role_id: 8
  },
  {
    first_name: "Christopher",
    last_name: "Garcia",
    role_id: 9
  },
  {
    first_name: "Elizabeth",
    last_name: "Hernandez",
    role_id: 10
  },
  {
    first_name: "Andrew",
    last_name: "Lopez",
    role_id: 11
  },
  {
    first_name: "Jessica",
    last_name: "Gonzalez",
    role_id: 12
  },
  {
    first_name: "Ryan",
    last_name: "Wilson",
    role_id: 13
  },
  {
    first_name: "Lauren",
    last_name: "Young",
    role_id: 14
  },
  {
    first_name: "Daniel",
    last_name: "Scott",
    role_id: 15
  },
];

const seedEmployees = () => Employee.bulkCreate(employeeSeedData);

module.exports = seedEmployees;

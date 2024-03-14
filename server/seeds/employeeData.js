const { Employee } = require("../models");

const employeeSeedData = [
  {
    first_name: "John",
    last_name: "Doe",
    email: "john.doe@example.com",
    salary: 100000,
    is_manager: true,
    role_id: 1,
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    email: "jane.smith@example.com",
    salary: 80000,
    is_manager: false,
    role_id: 2
  },
  {
    first_name: "Michael",
    last_name: "Johnson",
    email: "michael.johnson@example.com",
    salary: 75000,
    is_manager: false,
    role_id: 3
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    email: "emily.brown@example.com",
    salary: 70000,
    is_manager: false,
    role_id: 4
  },
  {
    first_name: "David",
    last_name: "Williams",
    email: "david.williams@example.com",
    salary: 65000,
    is_manager: false,
    role_id: 5
  },
  {
    first_name: "Sarah",
    last_name: "Anderson",
    email: "sarah.anderson@example.com",
    salary: 60000,
    is_manager: false,
    role_id: 6
  },
  {
    first_name: "Matthew",
    last_name: "Taylor",
    email: "matthew.taylor@example.com",
    salary: 55000,
    is_manager: false,
    role_id: 7
  },
  {
    first_name: "Amanda",
    last_name: "Martinez",
    email: "amanda.martinez@example.com",
    salary: 50000,
    is_manager: false,
    role_id: 8
  },
  {
    first_name: "Christopher",
    last_name: "Garcia",
    email: "christopher.garcia@example.com",
    salary: 45000,
    is_manager: false,
    role_id: 9
  },
  {
    first_name: "Elizabeth",
    last_name: "Hernandez",
    email: "elizabeth.hernandez@example.com",
    salary: 40000,
    is_manager: false,
    role_id: 10
  },
  {
    first_name: "Andrew",
    last_name: "Lopez",
    email: "andrew.lopez@example.com",
    salary: 35000,
    is_manager: false,
    role_id: 11
  },
  {
    first_name: "Jessica",
    last_name: "Gonzalez",
    email: "jessica.gonzalez@example.com",
    salary: 30000,
    is_manager: false,
    role_id: 12
  },
  {
    first_name: "Ryan",
    last_name: "Wilson",
    email: "ryan.wilson@example.com",
    salary: 25000,
    is_manager: false,
    role_id: 13
  },
  {
    first_name: "Lauren",
    last_name: "Young",
    email: "lauren.young@example.com",
    salary: 20000,
    is_manager: false,
    role_id: 14
  },
  {
    first_name: "Daniel",
    last_name: "Scott",
    email: "daniel.scott@example.com",
    salary: 15000,
    is_manager: false,
    role_id: 15
  },
];

const seedEmployees = () => Employee.bulkCreate(employeeSeedData);

module.exports = seedEmployees;

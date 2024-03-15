const { Manager } = require("../models");

const managerSeedData = [
  {
    first_name: "Josh",
    last_name: "Dohn",
    email: "josh.dohn@email.com",
    role_id: 1,
  },
  {
    first_name: "Janet",
    last_name: "Dohn",
    email: "janet.dohn@email.com",
    role_id: 1,
  },
  {
    first_name: "Steve",
    last_name: "Names",
    email: "steve.names@email.com",
    role_id: 2,
  },
  {
    first_name: "Stewart",
    last_name: "Lee",
    email: "stewartlee@email.com",
    role_id: 2,
  },
  {
    first_name: "Dan",
    last_name: "Jones",
    email: "dan_jones@email.com",
    role_id: 3,
  },
  {
    first_name: "Sarah",
    last_name: "Anderson",
    email: "sanderson@email.com",
    role_id: 2,
  },
];

const seedManagers = () => Manager.bulkCreate(managerSeedData);

module.exports = seedManagers;

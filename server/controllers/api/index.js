const router = require('express').Router(); // Import the Router class from Express.js

const userRoutes = require('./user-controller'); // Import the user routes
const departmentRoutes = require('./department-controller'); // Import the department routes

router.use('/users', userRoutes); // Use the user routes
router.use('/departments', departmentRoutes); // Use the department routes

module.exports = router; // Export the router for use in other parts of the application
const router = require('express').Router(); // Import the Router class from Express.js

const userRoutes = require('./user-controller'); // Import the user routes
const departmentRoutes = require('./department-controller'); // Import the department routes
const roleRoutes = require('./role-controller'); // Import the role routes
const employeeRoutes = require('./employee-controller'); // Import the employee routes

router.use('/users', userRoutes); // Use the user routes
router.use('/departments', departmentRoutes); // Use the department routes
router.use('/roles', roleRoutes); // Use the role routes
router.use('/employees', employeeRoutes); // Use the employee routes

module.exports = router; // Export the router for use in other parts of the application
const router = require('express').Router(); // Import the Router class from Express.js

const apiRoutes = require('./api'); // Import the API routes from the 'api' directory

router.use('/api', apiRoutes); // Use the API routes from the 'api' directory

module.exports = router; // Export the router for use in other parts of the application

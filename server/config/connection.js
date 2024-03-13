// Import the Sequelize library for interacting with SQL databases
const Sequelize = require('sequelize');

// Load environment variables from a .env file
require('dotenv').config();

// Declare a variable to store the Sequelize instance
let sequelize;

// Check if the JAWSDB_URL environment variable is set (indicating a Heroku deployment with JawsDB MySQL)
if (process.env.JAWSDB_URL) {
  // If JAWSDB_URL is set, create a Sequelize instance using the provided database URL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If JAWSDB_URL is not set, create a Sequelize instance using the local database configuration
  sequelize = new Sequelize(
    process.env.DB_NAME,        // Name of the database
    process.env.DB_USER,        // Database user
    process.env.DB_PASSWORD,    // Database user's password
    {
      host: 'localhost',        // Database host (local machine)
      dialect: 'mysql',         // SQL dialect to use (MySQL in this case)
      port: 3306                // Port on which the database server is running
    }
  );
}

// Export the configured Sequelize instance for use in other parts of the application
module.exports = sequelize;


// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

// module.exports = mongoose.connection;

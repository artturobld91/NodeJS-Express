const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Database connected successfully'); 
    } catch (error) {
        console.error('Database connection failed:', error);
        throw new Error('Database connection failed');
    }
}

module.exports = dbConnection;
// This function connects to the MongoDB database using Mongoose.
// It uses the connection string stored in the environment variable DB_CONNECTION.
// If the connection is successful, it logs a success message; otherwise, it throws an error.
// Ensure to call this function in your main application file (e.g., index.js) to establish the database connection before starting the server.
// Example usage in index.js:
// const dbConnection = require('./database/dbconfig');
// dbConnection();
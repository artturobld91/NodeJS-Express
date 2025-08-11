const express = require('express');
const cors = require('cors'); //To enable CORS
const dotenv = require('dotenv'); //To load environment variables
const dbConnection = require('./database/dbconfig'); // Import the database connection function

//Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

//Enabling CORS
app.use(cors());

// Middleware to parse JSON bodies
// Body Read and Parse - Note: This line should be placed before Routes
app.use(express.json());

// Connect to the database
dbConnection(); 

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/api/items', require('./routes/standardcrudroutes'));
app.use('/api/users', require('./routes/usersroutes'));

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT || 3000}`);
});

// Export the app for testing purposes
// module.exports = app;
// This allows the app to be imported in other files for testing or further configuration.  
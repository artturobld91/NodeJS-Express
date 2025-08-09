const express = require('express');
const cors = require('cors'); //To enable CORS

// Create an Express application
const app = express();
const port = 3000;

//Enabling CORS
app.use(cors());

// Middleware to parse JSON bodies
// Body Read and Parse - Note: This line should be placed before Routes
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Routes
app.use('/api/items', require('./routes/standardcrudroutes'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Export the app for testing purposes
// module.exports = app;
// This allows the app to be imported in other files for testing or further configuration.  
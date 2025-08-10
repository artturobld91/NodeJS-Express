# How to setup a NodeJS with Express project

1. Install Node.js:
Ensure Node.js is installed on the system. If not, download and install the LTS version from the official Node.js website. This installation also includes npm (Node Package Manager).

2. Initialize the Project:
Create a new directory for the project and navigate into it using the terminal. Then, initialize a new Node.js project using npm init. This command creates a package.json file, which manages project dependencies and scripts. Using npm init -y will skip the interactive prompts and use default values.

```
mkdir my-express-app
cd my-express-app
npm init -y
```

3. Install Express:
Install Express as a dependency for the project using npm. This command adds Express to the package.json file and installs it in the node_modules directory.

`npm install express`

4. Create the Server File:
Create a JavaScript file (e.g., app.js or server.js) that will contain the Express application logic.

5. Write the Express Application:
Open the created JavaScript file and add the following code to set up a basic Express server:

```
const express = require('express');
const app = express();
const port = 3000;

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
```

6. Run the Server:
Execute the server file using Node.js from the terminal:

`node app.js`# NodeJS-Express

7. Install nodemon (For live updates with the server when dev)

`npm install -g nodemon`

Add scripts to package.json 
`"start:dev": "nodemon index.js"`
`"start": "node index.js"`
Then execute the scripts on the terminal
`npm run start:dev`

### To verify requests origination (CORS)
`npm install cors`

### To do validations on the requests
`npm install express-validator`

### To create connections with MongoDb
`npm install mongoose`

### Te read .env files
`npm install dotenv`
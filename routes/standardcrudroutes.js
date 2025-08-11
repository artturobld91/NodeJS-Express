const { Router } = require('express');
const cors = require('cors');
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/standardcrudcontroller');
const itemValidator = require('../middlewares/itemvalidator'); // Import the item validator middleware

var corsOptions = {
  origin: 'http://localhost:3000', // Adjust this to your frontend URL
  methods: ['POST'],
}

// Create a new router instance
const router = Router();

// Sample CRUD routes
router.get('/', [cors(corsOptions)], getItems);

router.post('/', 
    [itemValidator], 
    createItem);

router.put('/',
    [itemValidator],
    updateItem);

router.delete('/:id', deleteItem);

// Export the router to be used in the main app
module.exports = router;
// This allows the routes to be imported in the main application file (e.g., index.js) for use.
// Ensure to include this router in your main app file using app.use('/api', require('./routes/standardcrudroutes'));   




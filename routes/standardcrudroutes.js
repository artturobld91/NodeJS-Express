const { Router } = require('express');
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/standardcrudcontroller');
const itemValidator = require('../middlewares/itemvalidator'); // Import the item validator middleware

// Create a new router instance
const router = Router();

// Sample CRUD routes
router.get('/', getItems);

router.post('/', 
    [itemValidator], 
    createItem);

router.put('/',
    [itemValidator],
    updateItem);

// router.get('/items/:id', (req, res) => {
//   res.send(`Get item with ID: ${req.params.id}`);
// });

// router.put('/items/:id', (req, res) => {
//   res.send(`Update item with ID: ${req.params.id}`);
// });

router.delete('/:id', deleteItem);

// Export the router to be used in the main app
module.exports = router;
// This allows the routes to be imported in the main application file (e.g., index.js) for use.
// Ensure to include this router in your main app file using app.use('/api', require('./routes/standardcrudroutes'));   




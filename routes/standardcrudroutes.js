const { Router } = require('express');
const { getItems } = require('../controllers/standardcrudcontroller');
const router = Router();

// Sample CRUD routes
router.get('/', getItems);

// router.post('/items', (req, res) => {
//   res.send('Create an item');
// });

// router.get('/items/:id', (req, res) => {
//   res.send(`Get item with ID: ${req.params.id}`);
// });

// router.put('/items/:id', (req, res) => {
//   res.send(`Update item with ID: ${req.params.id}`);
// });

// router.delete('/items/:id', (req, res) => {
//   res.send(`Delete item with ID: ${req.params.id}`);
// });

// Export the router to be used in the main app
module.exports = router;
// This allows the routes to be imported in the main application file (e.g., index.js) for use.
// Ensure to include this router in your main app file using app.use('/api', require('./routes/standardcrudroutes'));   



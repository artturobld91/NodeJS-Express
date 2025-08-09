const { response } = require('express');

let items = []; // This will hold our items, in a real app this would be a database

const getItems = (req, res = response) => {
    res.status(200).json({
        success: true,
        data: items
    });
}

module.exports = {
    getItems
};

// This file defines a simple controller for handling CRUD operations on items.
// The `getItems` function retrieves all items and sends them as a JSON response.
// In a real application, you would typically have more functions for creating, updating, and deleting items.

// Ensure to import this controller in your routes file (e.g., standardcrudroutes.js) and use it to handle the corresponding routes.
// Example: router.get('/items', getItems);

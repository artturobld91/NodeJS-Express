const { response } = require('express');
const itemModel = require('../models/item');

let items = []; // This will hold our items, in a real app this would be a database

const getItems = (req, res = response) => {
    res.status(200).json({
        success: true,
        data: items
    });
}

const createItem = (req, res = response) => {
    const newItem = req.body; // Assuming the item data is sent in the request body

    if(items.find(item => item.id === newItem.id)) {
        return res.status(400).json({
            success: false,
            message: 'Item with this ID already exists'
        });
    }

    items.push(newItem); // Add the new item to our items array

    res.status(201).json({
        success: true,
        data: newItem
    });
}

const updateItem = (req, res = response) => {
    const { id } = req.body; // Get the item ID from the request body
    const itemIndex = items.findIndex(item => item.id === Number(id)); // Find the index of the item to update

    if(itemIndex === -1) {
        return res.status(404).json({
            success: false,
            message: 'Item not found'
        });
    }

    // Update the item with the new data
    items[itemIndex] = { ...req.body };

    res.status(200).json({
        success: true,
        data: items[itemIndex]
    });
}

const deleteItem = (req, res = response) => {
    const { id } = req.params; // Get the item ID from the request parameters
    items = items.filter(item => item.id !== Number(id)); // Filter out the item with the given ID

    res.status(204).json({
            success: true,
            message: 'Item with this ID was deleted'
        }); // Send a no content response
}

module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteItem
};

// This file defines a simple controller for handling CRUD operations on items.
// The `getItems` function retrieves all items and sends them as a JSON response.
// In a real application, you would typically have more functions for creating, updating, and deleting items.

// Ensure to import this controller in your routes file (e.g., standardcrudroutes.js) and use it to handle the corresponding routes.
// Example: router.get('/items', getItems);

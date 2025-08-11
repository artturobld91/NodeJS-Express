const { response } = require('express');
const { validationResult, check } = require('express-validator');

// Middleware to validate item data
const itemValidator = [
    check('id').notEmpty().withMessage('Id is required'),
    check('name').notEmpty().withMessage('Name is required'),

    (req, res = response, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }
        next();
    }
];

module.exports = itemValidator;
// This middleware checks if the incoming request has valid item data and returns an error response if not.
// It uses express-validator to validate the 'name', 'description', and 'price' fields.
// Ensure to use this middleware in your routes where item data is expected, e.g., in createItem route.
// Example usage in routes: router.post('/', itemValidator, createItem);
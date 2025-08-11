const { response } = require('express');
const { validationResult, check } = require('express-validator');

// Middleware to validate user data
const userValidator = [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Valid email is required'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    check('role').notEmpty().isIn(['ADMIN_ROLE', 'USER_ROLE']).withMessage('Role must be either ADMIN_ROLE or USER_ROLE'),

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

module.exports = userValidator;
// This middleware checks if the incoming request has valid user data and returns an error response if not.
// It uses express-validator to validate the 'name', 'email', and 'password' fields.
// Ensure to use this middleware in your routes where user data is expected, e.g., in createUser route.
// Example usage in routes: router.post('/users', userValidator, createUser);
// This allows the routes to be imported in the main application file (e.g., index.js) for use.
// Ensure to include this middleware in your main app file using app.use('/api/users', require('./middlewares/uservalidator')); 
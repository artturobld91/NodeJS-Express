const Router = require('express');
const { 
    getUsers, 
    createUser, 
    updateUser, 
    deleteUser 
} = require('../controllers/userscontroller');
const userValidator = require('../middlewares/uservalidator'); // Import the user validator middleware

// Create a new router instance

const router = Router();

router.get('/', getUsers);

router.post('/', 
    [userValidator], 
    createUser);

router.put('/:id',
    [userValidator],
    updateUser);

router.delete('/:id', deleteUser);

module.exports = router;
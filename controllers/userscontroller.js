const { response } = require('express');
const mongoose = require('mongoose');
const UserT = require('../models/usert');

const getUsers = (req, res = response) => {
    UserT.find({}).then(users => {
        res.status(200).json({
            success: true,
            data: users || []
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: 'Error retrieving users',
            error: err.message
        });
    });
}

const createUser = async(req, res = response) => {
    const { name, email, password, role } = req.body;

    const emailExists = await UserT.findOne({ email })

    if(emailExists){
        return res.status(400).json({
            ok: false,
            message: 'The email already exists'
        });
    }

    const newUser = new UserT({ name, email, password, role, status: true });
    newUser.save().then(user => {
        res.status(201).json({
            success: true,
            data: user
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: 'Error creating user',
            error: err.message
        });
    });
}

const updateUser = async(req, res = response) => {
    const { id } = req.params;
    const { email, password, ...data } = req.body;

    const emailExists = await UserT.findOne({ email })

    if(!emailExists){
        return res.status(400).json({
            ok: false,
            message: 'The user does not exists'
        });
    }

    const objectId = new mongoose.Types.ObjectId(id);
    const updatedUser = await UserT.findByIdAndUpdate(objectId, data, { new: true });

    if(!updatedUser){
        return res.status(404).json({
            ok: false,
            message: 'User not found'
        });
    }

    res.status(200).json({
        success: true,
        data: updatedUser
    });
    
}

const deleteUser = (req, res = response) => {
    const { id } = req.params; // Get the user ID from the request parameters
    const objectId = new mongoose.Types.ObjectId(id);

    UserT.findByIdAndDelete(objectId).then(() => {
        res.status(204).json({
            success: true,
            message: 'User with this ID was deleted'
        }); // Send a no content response
    }).catch(err => {
        res.status(500).json({
            success: false, 
            message: 'Error deleting user',
            error: err.message
        });
    });
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};
// This controller function retrieves all users from the database using the User model.
// It sends a JSON response with the list of users or an error message if something goes wrong.
// Ensure to import and use this controller in your routes where user data needs to be fetched. For example, in usersroutes.js, you can set up a route to call this getUsers function.
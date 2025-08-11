const { Schema, model } = require('mongoose');

const UserTSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['ADMIN_ROLE', 'USER_ROLE'],
        default: 'USER_ROLE'
    },
    status: {
        type: Boolean,
        default: true
    }
});

UserTSchema.method('toJSON', function(){
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('UserT', UserTSchema);// This code defines a Mongoose schema and model for a User entity.
// The User model includes fields for name, email, password, role, and status.
// The email field is unique, and the role field has predefined values.
// The model is exported for use in other parts of the application.
// Ensure to import and use this model in your controllers or services where user data needs to be managed. For example, in a user controller, you can perform CRUD operations using this User model.
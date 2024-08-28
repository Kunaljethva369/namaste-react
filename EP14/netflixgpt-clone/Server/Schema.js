const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

// Create the User model
const User = mongoose.model('User',userSchema);

module.exports = User;

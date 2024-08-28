const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./Schema');

const router = express.Router();

// Sign Up Route
router.post('/signup',async (req,res) => {
    const { firstName,email,password } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'Email already registered.' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // Create a new user
        user = new User({
            firstName,
            email,
            password: hashedPassword,
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (err) {
        console.error('Sign Up Error:',err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Sign In Route
router.post('/signin',async (req,res) => {
    const { email,password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Check if the password matches
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        res.status(200).json({ message: 'Sign in successful!' });
    } catch (err) {
        console.error('Sign In Error:',err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;

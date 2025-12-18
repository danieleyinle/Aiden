// 1. IMPORT THE MODEL (Crucial Step)
const User = require('../models/User');

// @route   GET /api/users
// @desc    Get all users
// @access  Public
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// @route   POST /api/users
// @desc    Create a user
// @access  Public
exports.createUser = async (req, res) => {
    // Destructure data from the request body
    const { name, email } = req.body;

    try {
        // Create a new instance of the User model
        const newUser = new User({
            name,
            email
        });

        // Save to MongoDB
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        console.error(err.message);
        // Handle duplicate email errors specifically if you like
        if (err.code === 11000) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        res.status(500).send('Server Error');
    }
};
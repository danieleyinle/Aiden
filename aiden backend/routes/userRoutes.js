const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/userController');

// Map HTTP methods to controller functions
router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;


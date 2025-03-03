const express = require('express');
const router = express.Router();

// GET request to fetch all users
router.get('/users', (req, res) => {
    res.send('All users fetched!');
});

// POST request to create a new user
router.post('/users', (req, res) => {
    res.send('New user created!');
});

module.exports = router;

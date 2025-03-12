const express = require('express');
const { registerUser, loginUser,updateUser,logoutUser } = require('../controllers/authcontroller');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Register Route
router.post('/register', registerUser);

// Login Route
router.post('/login', loginUser);

//update User
router.put ('/update',authMiddleware,updateUser)

router.post('/logout',logoutUser);

module.exports = router;

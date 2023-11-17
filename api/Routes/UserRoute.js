const express = require('express');
const { login, register } = require('../Controllers/UserController');
const router = express.Router();

// Login
router.post('/login' , login)

// SignUp 
router.post('/register' , register)


module.exports = router;


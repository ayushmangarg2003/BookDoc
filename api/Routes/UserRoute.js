const express = require('express');
const { login, register } = require('../Controllers/UserController');
const router = express.Router();
const mongoose = require('mongoose')

const User = require('../Models/UserSchema');

// Login
router.post('/login', login)

// SignUp 
router.post('/register', register)

router.get('/userData/:id', async (req, res) => {
    const { id } = req.params
    try {
        const userdata = await User.findOne({ email: id })
        if (!userdata) {
            return res.status(404).send("error in UserRoute")
        }
        res.status(200).json(userdata)
        
    } catch (error) {
        console.log("Error" + error);
    }


})
module.exports = router;


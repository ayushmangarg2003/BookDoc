const express = require('express');
const { login, register } = require('../Controllers/UserController');
const router = express.Router();

// Login
router.post('/login' , login)

// SignUp 
router.post('/register' , register)

router.get('/userData',(req,res)=>{
    console.log(req);
    res.json({"hello":"world"})
})
module.exports = router;


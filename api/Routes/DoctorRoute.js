const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const Doctor = require('../Models/DoctorSchema');
const { register, getDocData } = require('../Controllers/DoctorController');

router.post('/register', register)
router.get('/doctorData', getDocData)
module.exports = router;


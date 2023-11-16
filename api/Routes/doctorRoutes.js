const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({"name":"ayushman"})
})

router.get('/:id',(req,res)=>{
    res.json({"name":"bhai"})
})

module.exports = router
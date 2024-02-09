const express=require('express');
const Passenger = require('../models/users.js');
const router=express.Router();
const path = require('path');


// router.post('/',async(req,res)=>{
    
// })

router.post('/', async(req, res) => {
    // add books
    Passenger.collection.insertOne(req.body)
        .then((result) => {
            res.status(201).json(req.body);
        })
        .catch((err) => {
            console.log(err);
        })
    // failure response not needed
})

module.exports = router;
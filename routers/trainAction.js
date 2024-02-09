const express=require('express');
const Trains = require('../models/train');
const router=express.Router();
const path = require('path');


router.post('/',async(req,res)=>{

    Trains.collection.insertOne(req.body)
    .then((result) => {
      
        const formattedResponse = {
            "train_id": req.body.train_id,
            "train_name": req.body.train_name,
            "capacity": req.body.capacity,
            "service_start": req.body.stops[0].departure_time,
            "service_ends": req.body.stops[req.body.stops.length-1].arrival_time,
            "num_stations": req.body.stops.length
        };
        res.status(201).json(formattedResponse);
    })
    .catch((err) => {
        console.log(err);
    })
  
})

module.exports = router;
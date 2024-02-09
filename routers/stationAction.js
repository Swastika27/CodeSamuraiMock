const express=require('express');

const router=express.Router();
const Station = require('../models/station'); // Import your Station model


router.post('/',async(req,res)=>{
    Station.collection.insertOne(req.body)
    .then((result) => {
        res.status(201).json(req.body);
    })
    .catch((err) => {
        // Log any errors that occurred
        console.log(err);
    });
})

router.get('/', async (req, res) => {
    Station.find()
        .then((stations) => {
            res.status(200).json({ stations });
        })
        .catch((err) => {
            console.log(err);
        });
});



module.exports = router;
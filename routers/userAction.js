const express=require('express');
const Passenger = require('../models/users.js');
const Wallet = require('../models/wallet.js');
const router=express.Router();
const path = require('path');


// router.post('/',async(req,res)=>{
    
// })

router.post('/', async(req, res) => {
    // add books
    Passenger.collection.insertOne(req.body)
        .then((result) => {
            Wallet.collection.insertOne({
                "wallet_id": req.body.user_id,
                "balance": req.body.balance,
                "wallet_user":{
                    "user_id": req.body.user_id,
                    "user_name": req.body.user_name,
                }
            });
            const { _id, ...restOfBody } = req.body;
            res.status(201).json(restOfBody);
        })
        .catch((err) => {
            console.log(err);
        })
    // failure response not needed
})

module.exports = router;
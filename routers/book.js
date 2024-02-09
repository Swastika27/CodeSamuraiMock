const express=require('express');

const router=express.Router();
const path = require('path');


global.talents = [];



router.get('/',async(req,res)=>{
    res.send("ok");
})




module.exports = router;
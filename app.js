require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.MONGO_URL;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

async function connect() {
    try{
        await mongoose.connect(url);
        console.log("connected to mongodb")
    }catch(error)
    {
        console.log(error);
    }
}



// Constants
const indexRouter = require('./routers/indexRouters');

// Set the view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Middleware
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
connect();
app.use('/api', indexRouter);

module.exports =app;

require('dotenv').config();
const mongoose = require('mongoose');
const url = 'mongodb+srv://arpitasamurai:arpitasamurai@samurai.5afjuqn.mongodb.net/?retryWrites=true&w=majority';
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

const indexRouter = require('./routers/indexRouters');

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());
connect();
app.use('/api/books', indexRouter);

module.exports = app;
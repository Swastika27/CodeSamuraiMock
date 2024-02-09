require('dotenv').config();
const mongoose = require('mongoose');
const url = process.env.MONGO_URL;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Passenger = require('./models/users.js');
const  Trains = require('./models/train.js');
const Stations = require('./models/station.js');

async function connect() {
    try{
        await mongoose.connect(url);
        console.log("connected to mongodb")
    }catch(error)
    {
        console.log(error);
    }
}

async function clearCollections() {
    try {
        await Passenger.deleteMany({});
        await Trains.deleteMany({});
        await Stations.deleteMany({});
        console.log("Collections cleared");
    } catch (error) {
        console.log("Error clearing collections:", error);
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
(async () => {
    await connect();
    await clearCollections();
    app.use('/api', indexRouter);
})();

module.exports =app;
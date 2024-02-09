const express=require('express');

const router=express.Router();
const Station = require('../models/station'); // Import your Station model
const Trains = require('../models/train');

async function getTrainsForStation(stationId) {
    const cursor = Trains.find({'stops.station_id': stationId});

    //console.log(cursor);
    // Example implementation
    // You would typically query your database here to retrieve trains for the given station ID
    const result = await Trains.find({'stops.station_id':stationId}).exec();
    return result;
}

async function getArrivalTime(stationId, stops) {
    // Iterate through the stops array to find the stop with the matching station_id
    console.log(stops.length);
    for (let i = 0; i < stops.length; i++) {
        if (stops[i].station_id === stationId) {
            return stops[i].arrival_time;
        }
    }
    // Return null if no matching station_id is found
    return null;
}

function getDepartureTime(stationId, stops) {
    // Iterate through the stops array to find the stop with the matching station_id
    for (let i = 0; i < stops.length; i++) {
        if (stops[i].station_id === stationId) {
            return stops[i].departure_time;
        }
    }
    // Return null if no matching station_id is found
    return null;
}

router.post('/',async(req,res)=>{
    Station.collection.insertOne(req.body)
    .then((result) => {
        const { _id, ...restOfBody } = req.body;
        res.status(201).json(restOfBody);
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



router.get('/:station_id/trains', async(req, res) => {
    const stationId = req.params.station_id;
    
    const trains = await getTrainsForStation(stationId);
    // Call your function to retrieve trains for the given station ID
    //const trains = getTrainsForStation(stationId);

    // Respond with the retrieved trains

    const trainArray = [];

// Iterate through the response and restructure it
trains.forEach(train => {

    const formattedtrain = {
        "train_id": train.train_id,
        "arrival_time": getArrivalTime(stationId,train.stops),
        "departure_time": getDepartureTime(stationId,train.stops)
        
    };
    trainArray.push(formattedtrain);
});

 console.log(trainArray);
 const formatResponse = {
    "station_id": stationId,
    "trains": trainArray
 }
    res.json(trains);
});



module.exports = router;
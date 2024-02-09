const express=require('express');

const router=express.Router();
const Station = require('../models/station'); // Import your Station model
const Trains = require('../models/train');

// async function getTrainsForStation(stationId) {
//     // const cursor = Trains.find({'stops.station_id': stationId});

//     //console.log(cursor);
//     // Example implementation
//     // You would typically query your database here to retrieve trains for the given station ID
//     const result = await Trains.find({'stops.station_id':stationId}).exec();
//     return result;
// }

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
    Station.find({}, { _id: 0 })
    .then((stations) => { 
        res.status(200).json({ stations }); 
    }) 
    .catch((err) => { 
        console.log(err); 
    }); 
});


async function getTrainsForStation(stationId) {
    return Trains.find({ 'stops.station_id': stationId });
}

router.get('/:station_id/trains', async(req, res) => {
    const stationId = parseInt(req.params.station_id);
    
    const trains = await getTrainsForStation(stationId);

    const trainArray = [];

    // Iterate through the response and restructure it
    for (let train of trains) {
        const stop = train.stops.find(stop => stop.station_id === stationId);
        if (stop) {
            const formattedTrain = {
                "train_id": train.train_id,
                "arrival_time": stop.arrival_time,
                "departure_time": stop.departure_time
            };
            trainArray.push(formattedTrain);
        }
    }

    const formatResponse = {
        "station_id": stationId,
        "trains": trainArray
    }

    res.json(formatResponse);
});

module.exports = router;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainSchema = new Schema ({
    train_id: {
        type: Number,
        required : true
    },
    train_name: {
        type : String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    }
    ,
    stops:
    {
        station_id: {
            type: Number,
            required: true
        },
        arrival_time: {
            type: String, //hh:mm format restriction need to be handled
            required: true
        },
        departure_time: {
            type: String, //hh:mm format restr need to be handled
            required: true
        },
        fare: 
        {
            type: Number,
            required: true
        }

    }
}, {timestamps: true});

const Trains = mongoose.model('Trains', bookSchema);

module.exports = Trains;
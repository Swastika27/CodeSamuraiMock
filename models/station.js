const { Double } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationSchema = new Schema ({
    station_id: {
        type: Number,
        required : true
    },
    station_name: {
        type : String,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    latitude:{
        type: Number,
        required: true
    }
}, {timestamps: true});

const Stations = mongoose.model('Stations', stationSchema);

module.exports = Stations;
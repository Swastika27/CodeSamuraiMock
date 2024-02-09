const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema ({
    ticket_id: {
        type: Number,
        required : true
    },
    wallet_id: {
        type: Number,
        required : true
    },
    cost: {
        type: Number,
        required: true
    },
    path: {
        station_id: {
            type: Number,
            required: true
        },
        train_id: {
            type: Number,
            required: true
        },
        arrival_time: {
            type: String,
            required: true
        },
        departure_time: {
            type: String,
            required: true
        },
    },
}, {timestamps: true});

const Ticket = mongoose.model('ticket', ticketSchema);

module.exports = Ticket;
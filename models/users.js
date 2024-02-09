const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    user_id: {
        type: Number,
        required : true
    },
    user_name: {
        type : String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
}, {timestamps: true});

const Passenger = mongoose.model('Users', bookSchema);

module.exports = Passenger;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = new Schema ({
    wallet_id: {
        type: Number,
        required : true
    },
    balance: {
        type: Number,
        required: true
    },
    wallet_user: {
        user_id: {
            type: Number,
            required: true
        },
        user_name: {
            type: String,
            required: true
        }
    }
}, {timestamps: true});

const Wallet = mongoose.model('wallet', walletSchema);

module.exports = Wallet;
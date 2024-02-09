const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    id: {
        type: Number,
        required : true
    },
    title: {
        type : String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    }
}, {timestamps: true});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
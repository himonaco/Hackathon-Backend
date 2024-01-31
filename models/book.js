const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: String,
    price: Number,
})


const Book = mongoose.model('book', bookSchema)

module.exports = Book


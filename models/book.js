const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
    isActive: Boolean
})


const Book = mongoose.model('book', bookSchema)

module.exports = Book


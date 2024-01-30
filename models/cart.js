const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
    isActive: Boolean
})


const Cart = mongoose.model('cart', cartSchema)

module.exports = Cart


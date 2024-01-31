const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Cart = require('../models/cart');
const Trip = require('../models/trips');
const moment = require('moment');

router.post('/', (req, res) => {
    Cart.find().then(data => {
        for (let i = 0; i < data.length; i++) {
            const newBooking = new Book({ trip: data[i].trip, isActive: true })
            newBooking.save().then(() => {
                Cart.deleteOne({ trip: data[i].trip })

                Book.find().populate("trip").then(data => {
                    res.json({ result: true, bookings: data })
                })
            })
        }
    })
})


router.get('/', (req, res) => {
    Book.find().populate('trip').then(data => {
        if (!data) {
            res.json({ result: false })
        } else {
            res.json({ result: true, booking: data })
        }
    })
}
)




module.exports = router;
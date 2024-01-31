const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Cart = require('../models/cart');
const Trip = require('../models/trips');
const moment = require('moment');

router.post('/', (req, res) => {
    Cart.find().then(data => {
        if (data.length <= 1) {
            const newBooking = new Book({
                departure: data.departure,
                arrival: data.arrival,
                date: data.date,
                price: data.price
            })
            newBooking.save().then(data => {
                res.json({ result: true, booking: data })
            })

        } else {
            for (let i = 0; i < data.length; i++) {
                const newBooking = new Book({
                    departure: data[i].departure,
                    arrival: data[i].arrival,
                    date: data[i].date,
                    price: data[i].price
                })
                newBooking.save().then(data => {
                    let bookArray = []
                    bookArray.push(data)
                })
            } res.json({ result: true })
        }
    })
})




router.get('/', (req, res) => {
    Book.find().then(data => {
        if (!data) {
            res.json({ result: false })
        } else {
            res.json({ result: true, bookings: data })
        }
    })
}
)


module.exports = router;
const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Cart = require('../models/cart');
const Trip = require('../models/trips');
const moment = require('moment');

router.post('/', (req, res) => {
  const { departure, arrival, date } = req.body;
  const dateStart = moment(date).startOf('day')
  const dateEnd = moment(date).endOf('day')

  // if (!departure || !arrival || !date) {
  //   return res.status(400).json({ error: 'Please provide values for all fields.' });
  // }
  const trips = Trip.find({
    departure: { $regex: new RegExp(departure, "i") },
    arrival: { $regex: new RegExp(arrival, "i") },
    date: { $gte: dateStart, $lte: dateEnd }
  }).then(data => {
    if (data) {
      res.json({ result: true, trips: data })
    } else {
      res.json({ result: false, error: 'Trip not found' });
    }
  })
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Trip = require('../models/trips');

router.post('/', (req, res) => {
  const { departure, arrival, date } = req.body;

  if (!departure || !arrival || !date) {
    return res.status(400).json({ error: 'Please provide values for all fields.' });
  }
  const trips = Trip.find({
    departure,
    arrival,
    date,
  });

  res.json({ trips });
});






module.exports = router;
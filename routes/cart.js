const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const Trip = require('../models/trips');

router.post('/', async (req, res) => {
    const { tripId } = req.body;
    const trip = await Trip.findById(tripId);
    if (req.cart.includes(tripId)) {
        return res.json({ error: 'Trip already in cart.' });
    }
    req.cart.push(tripId);
    res.json({ message: 'Trip added to cart successfully.' });
}
);


module.exports = router;
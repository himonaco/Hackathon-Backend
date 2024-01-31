const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const Cart = require('../models/cart');
const Trip = require('../models/trips');
const moment = require('moment');


router.post('/', async (req, res) => {
    const { tripId } = req.body;
    const existingTrip = await Cart.findOne({ trip: tripId });

    if (existingTrip)
        return res.json({ error: 'Trip already in cart.' });

    const newCartTrip = new Cart({ trip: tripId, isActive: true })
    await newCartTrip.save()

    res.json({ message: 'Trip added to cart successfully.' });
}
);



router.get('/', (req, res) => {
    Cart.find().then(data => {
        if (!data) {
            res.json({ result: false })
        } else {
            res.json({ result: true, cart: data })
        }
    })
}
)

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Cart.deleteOne({ _id: id });
        const data = await Cart.find();
        res.json({ result: true, cart: data });
    } catch (error) {
        res.status(500).json({ result: false, error: error.message });
    }
});



module.exports = router;
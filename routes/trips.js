const express = require('express');
const router = express.Router();

router.get('/:departure/:arrival', async (req, res) => {
  try {
    const { departure, arrival } = req.params;
    const trips = await Trip.find({ departure, arrival });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
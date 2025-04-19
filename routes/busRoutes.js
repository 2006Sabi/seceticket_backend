const express = require("express");
const router = express.Router();
const Bus = require("../models/Bus");

router.get("/:city/:subStop/:date", async (req, res) => {
  const { city, subStop, date } = req.params;
  const buses = await Bus.find({ city, subStop, date });
  res.json(buses);
});

router.post("/book", async (req, res) => {
  const { busId, seatNumber } = req.body;
  const bus = await Bus.findById(busId);
  if (bus.bookedSeats.includes(seatNumber)) {
    return res.status(400).json({ message: "Seat already booked" });
  }
  bus.bookedSeats.push(seatNumber);
  await bus.save();
  res.json({ message: "Seat booked" });
});

module.exports = router;

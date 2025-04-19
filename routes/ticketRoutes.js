const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

router.post("/generate", async (req, res) => {
  const { userId, busId, seatNumber, direction } = req.body;
  let amount = direction === "Both" ? 200 : 100;
  const ticket = new Ticket({ userId, busId, seatNumber, direction, amount });
  await ticket.save();
  res.status(201).json(ticket);
});

router.get("/:userId", async (req, res) => {
  const tickets = await Ticket.find({ userId: req.params.userId }).populate(
    "busId"
  );
  res.json(tickets);
});

module.exports = router;

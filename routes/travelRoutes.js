const express = require("express");
const router = express.Router();
const TravelDetail = require("../models/TravelDetail");

router.post("/details", async (req, res) => {
  try {
    const { userId, city, date, direction } = req.body;

    if (!userId || !city || !date || !direction) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const detail = new TravelDetail({ userId, city, date, direction });
    await detail.save();

    res.status(201).json(detail);
  } catch (error) {
    console.error("Error saving travel details:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;

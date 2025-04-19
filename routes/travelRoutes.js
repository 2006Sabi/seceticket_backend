const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const TravelDetail = require("../models/TravelDetail");

// ✅ Correct ObjectId reference
const { Types } = mongoose;

router.post("/travel-details", async (req, res) => {
  const { userId, city, date, direction } = req.body;

  if (!Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid userId" });
  }

  try {
    const detail = new TravelDetail({
      userId: new Types.ObjectId(userId),  // ✅ use the new keyword correctly here
      city,
      date,
      direction,
    });

    await detail.save();
    res.status(201).json(detail);
  } catch (error) {
    console.error("Error saving travel details:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;

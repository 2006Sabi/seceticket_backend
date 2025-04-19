const express = require("express");
const router = express.Router();
const TravelDetail = require("../models/TravelDetail");

router.post("/details", async (req, res) => {
  const { userId, city, date, direction } = req.body;
  const detail = new TravelDetail({ userId, city, date, direction });
  await detail.save();
  res.status(201).json(detail);
});

module.exports = router;

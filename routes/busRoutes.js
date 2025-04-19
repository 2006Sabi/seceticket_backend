const express = require("express");
const router = express.Router();
const { getAvailableBuses, bookSeat } = require("../controllers/busController");

// Get available buses
router.get("/available/:city/:subStop/:date", getAvailableBuses);

// Book a seat
router.post("/book", bookSeat);

module.exports = router;

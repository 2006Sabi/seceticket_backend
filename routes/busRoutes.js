const express = require("express");
const router = express.Router();
const {
  getAvailableBuses,
  bookSeat,
  addBus,
} = require("../controllers/busController");

// 🚍 Get available buses by city, sub-stop, and date
router.get("/available/:city/:subStop/:date", getAvailableBuses);

// 🎫 Book a seat on a bus
router.post("/book", bookSeat);

// ➕ Add a new bus
router.post("/add", addBus);

module.exports = router;

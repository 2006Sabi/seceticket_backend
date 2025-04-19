const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  busNo: { type: String, required: true },
  city: { type: String, required: true },
  subStop: { type: String, required: true },
  date: { type: Date, required: true },
  totalSeats: { type: Number, required: true },
  bookedSeats: { type: [Number], default: [] }, // Array of seat numbers that are booked
});

module.exports = mongoose.model("Bus", busSchema);

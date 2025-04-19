const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  busNo: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
  },
  subStop: {
    type: String,
    required: true,
  },
  date: {
    type: String, // or Date if you prefer
    required: true,
  },
  totalSeats: {
    type: Number,
    required: true,
  },
  bookedSeats: {
    type: [Number], // List of seat numbers that are already booked
    default: [],
  },
});

module.exports = mongoose.model("Bus", busSchema);

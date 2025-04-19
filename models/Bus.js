const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  city: String,
  subStop: String,
  busNumber: String,
  totalSeats: Number,
  bookedSeats: [String],
  date: Date,
});

module.exports = mongoose.model("Bus", busSchema);

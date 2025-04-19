const mongoose = require("mongoose");

const travelDetailSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  city: String,
  date: Date,
  direction: String,
});

module.exports = mongoose.model("TravelDetail", travelDetailSchema);

const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  busId: { type: mongoose.Schema.Types.ObjectId, ref: "Bus" },
  seatNumber: String,
  direction: String,
  amount: Number,
  paymentStatus: { type: String, default: "Paid" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ticket", ticketSchema);

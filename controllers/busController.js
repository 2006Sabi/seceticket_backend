const Bus = require("../models/Bus");

// ➕ Add a new bus
const addBus = async (req, res) => {
  const { busNo, city, subStop, date, totalSeats } = req.body;

  try {
    const newBus = new Bus({
      busNo,
      city,
      subStop,
      date,
      totalSeats,
      bookedSeats: [],
    });

    await newBus.save();
    res.status(201).json({ message: "Bus added successfully", bus: newBus });
  } catch (error) {
    console.error("Error adding bus:", error);
    res.status(500).json({ message: "Failed to add bus" });
  }
};

// 🚍 Get available buses by city, sub-stop, and date
const getAvailableBuses = async (req, res) => {
  const { city, subStop, date } = req.params;

  try {
    const buses = await Bus.find({ city, subStop, date });
    res.json(buses);
  } catch (error) {
    console.error("Error fetching buses:", error);
    res.status(500).json({ message: "Failed to fetch buses" });
  }
};

// 🎫 Book a seat on a bus
const bookSeat = async (req, res) => {
  const { busId, seatNumber } = req.body;

  try {
    const bus = await Bus.findById(busId);
    if (bus.bookedSeats.includes(seatNumber)) {
      return res.status(400).json({ message: "Seat already booked" });
    }

    bus.bookedSeats.push(seatNumber);
    await bus.save();
    res.json({ message: "Seat booked successfully" });
  } catch (error) {
    console.error("Error booking seat:", error);
    res.status(500).json({ message: "Booking failed" });
  }
};

module.exports = {
  addBus,
  getAvailableBuses,
  bookSeat,
};

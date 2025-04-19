const Bus = require("../models/Bus");

// Get available buses by city, subStop, and date
const getAvailableBuses = async (req, res) => {
  const { city, subStop, date } = req.params;

  try {
    const buses = await Bus.find({ city, subStop, date });

    const availableBuses = buses.map((bus) => ({
      busNo: bus.busNo,
      availableSeats: bus.totalSeats - bus.bookedSeats.length,
    }));

    res.json(availableBuses);
  } catch (error) {
    console.error("Error fetching available buses:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Book a seat in a bus
const bookSeat = async (req, res) => {
  const { busId, seatNumber } = req.body;

  try {
    const bus = await Bus.findById(busId);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    if (bus.bookedSeats.includes(seatNumber)) {
      return res.status(400).json({ message: "Seat already booked" });
    }

    bus.bookedSeats.push(seatNumber);
    await bus.save();

    res.json({ message: "Seat booked successfully" });
  } catch (error) {
    console.error("Error booking seat:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAvailableBuses,
  bookSeat,
};

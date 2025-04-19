const TravelDetail = require("../models/TravelDetail");

exports.saveTravelDetails = async (req, res) => {
  const { userId, city, date, direction } = req.body;
  const detail = new TravelDetail({ userId, city, date, direction });
  await detail.save();
  res.status(201).json(detail);
};

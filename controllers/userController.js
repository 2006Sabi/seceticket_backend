const User = require("../models/User");

exports.registerUser = async (req, res) => {
  const { name, rollNo, mobile } = req.body;
  const user = new User({ name, rollNo, mobile });
  await user.save();
  res.status(201).json(user);
};

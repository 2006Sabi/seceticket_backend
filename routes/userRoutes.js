const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { name, rollNo, mobile } = req.body;
  const user = new User({ name, rollNo, mobile });
  await user.save();
  res.status(201).json(user);
});

module.exports = router;

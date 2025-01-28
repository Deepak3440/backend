const User = require("../models/User");
const jwt = require("jsonwebtoken");
const axios = require("axios");

login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
register = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    console.log(existingUser);
    if (existingUser) {
      return res.status(400).json({
        message: "Username already exists",
        existingUser,
      });
    }

    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
test = async (req, res, next) => {
  console.log("test");
  return res.status(200).send({
    status: "sucess",
    message: "FucK you",
  });
};
module.exports = { login, register, test };

const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    // process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");
const url =
  "mongodb+srv://DeepakSingh:Ko8b8SrvjuzZ9rha@cluster0.lpe9kln.mongodb.net/";
// const url = "mongodb+srv://kapil:testingkatto@cluster0.lpe9kln.mongodb.net/";
// console.log("url", url);

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

const express = require("express");
const connectDB = require("./db/dbConfig");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes); // Set up the auth routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

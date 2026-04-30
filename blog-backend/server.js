const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();   // ✅ app pehle banega

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser()); // ✅ ab yaha sahi hai

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/blog", require("./routes/blogRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

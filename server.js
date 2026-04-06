// ---------------------------------------------
// 📌 POSTMAN URLs (Copy & Use)
// POST   http://localhost:2020/api/movies
// GET    http://localhost:2020/api/movies
// GET    http://localhost:2020/api/movies/:id
// PUT    http://localhost:2020/api/movies/:id
// DELETE http://localhost:2020/api/movies/:id
// ---------------------------------------------
require("dotenv").config();
const express = require("express");
const app = express();
const { connectDB } = require("./connectDB");

const movieRoutes = require("./src/routes/movieRoutes");

app.use(express.json());

connectDB();

app.use("/api/movies", movieRoutes);

app.get("/", (req, res) => {
  res.send(" Movie API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running `);
});

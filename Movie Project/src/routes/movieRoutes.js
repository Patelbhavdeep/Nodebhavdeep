const express = require("express");
const router = express.Router();

const {
  addMovie,
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
} = require("../controller/movieController");

router.post("/", addMovie);
router.get("/getall", getMovies);
router.get("/:id", getMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;

const Movie = require("../models/movieModel");

exports.addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.json({ message: "Movie Added Successfully", data: movie });
  } catch (error) {
    res.status(400).json({ message: "Error Adding Movie", error });
  }
};


exports.getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json({ total: movies.length, movies });
};


exports.getMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).json({ message: "Movie Not Found" });
  res.json(movie);
};


exports.updateMovie = async (req, res) => {
  try {
    const updated = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated)
      return res.status(404).json({ message: "Movie Not Found" });

    res.json({ message: "Movie Updated", updated });
  } catch (error) {
    res.status(400).json({ message: "Error Updating Movie", error });
  }
};


exports.deleteMovie = async (req, res) => {
  const deleted = await Movie.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Movie Not Found" });
  res.json({ message: "Movie Deleted Successfully" });
};

const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv")
dotenv.config()   // 👈 Blog nahi, User

module.exports = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({ msg: "user is not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id).select("+password");

    if (!req.user) {
      return res.status(404).json({ msg: "user not found" });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ msg: "Invalid Token" });
  }
};

// utils/generateToken.js
const jwt = require("jsonwebtoken");

exports.generateToken = (id, res) => {
  const token = jwt.sign(
    { id: id.toString() },
    process.env.JWT_SECRET_KEY,
    { expiresIn: process.env.JWT_EXPRES_IN }
  );

  const option = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: "lax"
  };

  res.cookie("token", token, option);
  return token;
};

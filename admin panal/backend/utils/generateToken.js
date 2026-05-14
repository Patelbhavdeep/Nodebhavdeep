import jwt from "jsonwebtoken";

const generateToken = (res, id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None"
  });
};

export default generateToken;

import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  res.json(await User.find().select("-password"));
};

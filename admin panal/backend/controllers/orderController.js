import Order from "../models/orderModel.js";

export const getOrders = async (req, res) => {
  res.json(await Order.find().populate("user"));
};

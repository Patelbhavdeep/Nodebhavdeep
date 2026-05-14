import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  res.json(await Product.find());
};

export const addProduct = async (req, res) => {
  res.json(await Product.create(req.body));
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

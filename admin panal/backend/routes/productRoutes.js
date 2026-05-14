import express from "express";
import { getProducts, addProduct, deleteProduct } from "../controllers/productController.js";
import protect from "../middleware/isAuth.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

router.get("/", protect, isAdmin, getProducts);
router.post("/", protect, isAdmin, addProduct);
router.delete("/:id", protect, isAdmin, deleteProduct);

export default router;

import express from "express";
import { getOrders } from "../controllers/orderController.js";
import protect from "../middleware/isAuth.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();
router.get("/", protect, isAdmin, getOrders);

export default router;

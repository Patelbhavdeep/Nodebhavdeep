import express from "express";
import { getUsers } from "../controllers/userController.js";
import protect from "../middleware/isAuth.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();
router.get("/", protect, isAdmin, getUsers);

export default router;

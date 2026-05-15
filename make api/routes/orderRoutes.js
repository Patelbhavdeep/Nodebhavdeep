const express = require("express");
const {
  placeOrder,
  getAllOrders
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", placeOrder);
router.get("/", getAllOrders);

module.exports = router;

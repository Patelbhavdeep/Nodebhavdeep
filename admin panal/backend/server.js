import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use("/api/auth", (await import("./routes/authRoutes.js")).default);
app.use("/api/products", (await import("./routes/productRoutes.js")).default);
app.use("/api/orders", (await import("./routes/orderRoutes.js")).default);
app.use("/api/users", (await import("./routes/userRoutes.js")).default);

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import clientfetch from "./routes/clientfetch.route.js";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import excelRoutes from "./routes/data.route.js";



dotenv.config();







const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/excel", excelRoutes);
app.use("/api/clients",clientfetch )




connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port:", PORT);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
  });

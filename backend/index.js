import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import clientfetch from "./routes/clientfetch.route.js";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import excelRoutes from "./routes/data.route.js";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/excel", excelRoutes);
app.use("/api/clients",clientfetch )

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  
  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  } );
}
  





connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port:", PORT);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to DB:", err);
  });

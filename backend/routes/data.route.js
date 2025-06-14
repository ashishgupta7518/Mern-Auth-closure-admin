import express from "express";
import { downloadExcel } from "../controllers/data.controller.js";

const router = express.Router();

router.get("/download", downloadExcel); // localhost:5000/api/excel/download

export default router;

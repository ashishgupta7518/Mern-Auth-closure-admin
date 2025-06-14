import express from "express";
import { getAllClients, getClientByCode ,loginByClientcode} from "../controllers/clientfetch.controller.js";

const router = express.Router();

router.get("/", getAllClients); // /api/client
router.get("/:clientcode", getClientByCode); // /api/client/:clientcode
router.get("/login/:clientcode/:staticcode", loginByClientcode); // /api/client/login/:clientcode

export default router;

import express from "express";

import { Message } from "../controllers/chatbot.message.js";
const router = express.Router();

// data base me bhejna hai ahr /message route aaya to
router.post("/message", Message);

export default router;

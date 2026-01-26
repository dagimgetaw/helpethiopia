import { Router } from "express";
import { SaveMessage } from "../controller/message.controller.js";

const MessageRoute = Router();

MessageRoute.post("/send-message", SaveMessage);

export default MessageRoute;

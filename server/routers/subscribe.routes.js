import { Router } from "express";
import { Subscribe } from "../controller/subscribe.controller.js";

const SubscribeRoute = Router();

SubscribeRoute.post("/subscribe", Subscribe);

export default SubscribeRoute;

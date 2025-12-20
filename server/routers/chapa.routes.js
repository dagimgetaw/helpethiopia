import { Router } from "express";
import { ChapaCheckout } from "../controller/chapa.controller.js";

const chapaRoute = Router();

chapaRoute.post("/chapa/initialize", ChapaCheckout);

export default chapaRoute;

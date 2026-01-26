import { Router } from "express";
import { ChapaCheckout } from "../controller/chapa.controller.js";

const ChapaRoute = Router();

ChapaRoute.post("/chapa/initialize", ChapaCheckout);

export default ChapaRoute;

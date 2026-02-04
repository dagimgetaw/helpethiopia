import { Router } from "express";
import { StripeCheckout } from "../controller/stripe.controller.js";

const StripeRoute = Router();

StripeRoute.post("/stripe/initialize", StripeCheckout);

export default StripeRoute;

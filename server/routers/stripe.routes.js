// import express from "express";
import { Router } from "express";
import {
  StripeCheckout,
  SaveTransaction,
} from "../controller/stripe.controller.js";

const stripeRoute = Router();

stripeRoute.post("/stripe/initialize", StripeCheckout);

stripeRoute.post(
  "/stripe/webhook",
  // express.raw({ type: "application/json" }),
  SaveTransaction
);

export default stripeRoute;

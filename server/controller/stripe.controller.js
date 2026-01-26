import Stripe from "stripe";
import {
  STRIPE_SECRET_KEY,
  CLIENT_URL,
  STRIPE_WEBHOOK_SECRET,
} from "../config/env.js";
import StripePayment from "../models/stripe.model.js";

const stripe = new Stripe(STRIPE_SECRET_KEY);

const StripeCheckout = async (req, res, next) => {
  try {
    const { amount, email, firstName, lastName, country, id_ref } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation",
              description: "Thank you for your donation",
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email,
      metadata: {
        firstName,
        lastName,
        country,
        email,
      },
      success_url: `${CLIENT_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${CLIENT_URL}/payment/cancel`,
    });

    res.json({
      success: true,
      message: "Checkout session created successfully",
      checkout_url: session.url,
      session_id: session.id,
    });
  } catch (error) {
    next(error);
  }
};

const SaveTransaction = async (req, res, next) => {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("Webhook signature verification failed", error.message);
    next(error);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    await StripePayment.create({
      firstName: session.metadata.firstName,
      lastName: session.metadata.lastName,
      email: session.metadata.email,
      country: session.metadata.country,
      amount: session.amount_total / 100,
      currency: session.currency.toUpperCase(),
      id_ref: session.metadata.id_ref,
      status: "success",
      stripeSessionId: session.id,
      paymentIntentId: session.payment_intent,
    });
  }

  res.json({ received: true });
};

export { StripeCheckout, SaveTransaction };

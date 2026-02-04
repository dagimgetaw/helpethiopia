import Stripe from "stripe";
import { STRIPE_SECRET_KEY, CLIENT_URL } from "../config/env.js";

const stripe = new Stripe(STRIPE_SECRET_KEY);

const StripeCheckout = async (req, res) => {
  try {
    const { firstName, lastName, email, amount, country, id_ref } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const fullName = `${firstName} ${lastName}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      customer_email: email,

      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation",
              description: `Donation from ${fullName} (${country})`,
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],

      metadata: {
        reference_id: id_ref,
        country,
      },

      success_url: `${CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${CLIENT_URL}/cancel`,
    });

    return res.status(200).json({
      success: true,
      checkout_url: session.url,
      session_id: session.id,
    });
  } catch (error) {
    res.status(500).json({ error: "Payment processing failed" });
  }
};

export { StripeCheckout };

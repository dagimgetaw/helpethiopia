import axios from "axios";
import { CHAPA_SECRET_KEY } from "../config/env.js";
import ChapaPayment from "../models/chapa.model.js";

const ChapaCheckout = async (req, res) => {
  try {
    const { amount, email, firstName, lastName, phoneNumber, tx_ref } =
      req.body;

    const response = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        amount: amount.toString(),
        currency: "ETB",
        email,
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
        tx_ref,
        callback_url: "https://yourdomain.com/api/chapa/callback",
        return_url: "http://localhost:3000/payment-success",
        customization: {
          title: "Donation Payment",
          description: "Thank you for your support",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    await ChapaPayment.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      amount,
      tx_ref,
      currency: "ETB",
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res
      .status(500)
      .json({ success: false, message: "Chapa initialization failed" });
  }
};

export { ChapaCheckout };

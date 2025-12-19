import mongoose from "mongoose";

const nameRules = /^[A-Za-z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const ethiopianPhoneRegex = /^(09|07)\d{8}$/;

const ChapaSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      match: [nameRules, "only letters are allowed"],
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
      match: [nameRules, "only letters are allowed"],
    },

    email: {
      type: String,
      required: true,
      trim: true,
      match: [emailRegex, "invalid email address"],
    },

    phoneNumber: {
      type: String,
      required: true,
      match: [
        ethiopianPhoneRegex,
        "enter valid ethiopian number (09xxxxxxxx or 07xxxxxxxx)",
      ],
    },

    amount: {
      type: Number,
      required: true,
      min: [10, "minimum amount is 10 ETB"],
      max: [100000, "maximum amount is 100,000 ETB"],
    },

    currency: {
      type: String,
      default: "ETB",
    },

    tx_ref: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

const ChapaPayment = mongoose.model("ChapaPayment", ChapaSchema);

export default ChapaPayment;

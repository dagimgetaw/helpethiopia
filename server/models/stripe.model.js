import mongoose from "mongoose";

const nameRules = /^[A-Za-z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const StripeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "first name is required"],
      trim: true,
      match: [nameRules, "only letters are allowed"],
    },

    lastName: {
      type: String,
      required: [true, "last name is required"],
      trim: true,
      match: [nameRules, "only letters are allowed"],
    },

    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      match: [emailRegex, "invalid email address"],
    },

    amount: {
      type: Number,
      required: [true, "amount is required"],
      min: [2, "minimum amount is $2"],
      max: [10000, "maximum amount is $10,000"],
    },

    country: {
      type: String,
      required: [true, "country is required"],
    },

    status: {
      type: String,
      enum: ["pending", "success", "faied"],
      default: "pending",
    },

    currency: {
      type: String,
      default: "USD",
    },

    id_ref: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

const StripePayment = mongoose.model("StripePayment", StripeSchema);

export default StripePayment;

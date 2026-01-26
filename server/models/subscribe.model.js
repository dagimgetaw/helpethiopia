import mongoose from "mongoose";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const SubscribeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      match: [emailRegex, "invalid email address"],
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const SubscribeModel = mongoose.model("Subscriber", SubscribeSchema);

export default SubscribeModel;

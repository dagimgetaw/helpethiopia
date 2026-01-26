import mongoose from "mongoose";

const fullNameRules = /^[A-Za-z]+(?:\s[A-Za-z]+)+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const messageRules = /^[a-zA-Z\s\-&,'".?!]+$/;

const MessageSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      match: [fullNameRules, "Only letters and spaces are allowed"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      match: [emailRegex, "Invalid email address"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minLength: [2, "Message must be at least 2 characters"],
      maxLength: [200, "Message must be less than 200 characters"],
      match: [
        messageRules,
        "Only letters, spaces, and basic punctuation are allowed",
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;

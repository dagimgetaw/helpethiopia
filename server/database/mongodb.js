import mongoose from "mongoose";
import { DB_URL } from "../config/env.js";

if (!DB_URL) {
  throw new Error("Define DB_URL in environment variable");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Successfully connected to database.");
  } catch (error) {
    console.log("Error connecting database: ", error);
    process.exit(1);
  }
};

export default connectDB;

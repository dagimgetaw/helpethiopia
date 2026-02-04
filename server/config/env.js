import { config } from "dotenv";

config({ path: ".env" });

export const {
  CLIENT_URL,
  SERVER_URL,
  STRIPE_SECRET_KEY,
  PORT,
  DB_URL,
  CHAPA_PUBLIC_KEY,
  CHAPA_SECRET_KEY,
} = process.env;

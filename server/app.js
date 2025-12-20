import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import connectDB from "./database/mongodb.js";
import chapaRoute from "./routers/chapa.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*", credentials: true }));
app.use(cookieParser());

app.use("/api/v1", chapaRoute);

app.get("/", (req, res) => {
  res.send("Welcome to help ethiopia admin api");
});

app.listen(PORT, async () => {
  console.log(`Backend api running on http://localhost:${PORT}`);
  await connectDB();
});

export default app;

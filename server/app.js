import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import ConnectDB from "./database/mongodb.js";
import ChapaRoute from "./routers/chapa.routes.js";
import MessageRoute from "./routers/message.routes.js";
import SubscribeRoute from "./routers/subscribe.routes.js";
import VolnteerRoute from "./routers/volnteer.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "*", credentials: true }));
app.use(cookieParser());

app.use("/api/v1", ChapaRoute);
app.use("/api/v1", MessageRoute);
app.use("/api/v1", SubscribeRoute);
app.use("/api/v1", VolnteerRoute);

app.get("/", (req, res) => {
  res.send("Welcome to help ethiopia admin api");
});

app.listen(PORT, async () => {
  console.log(`Backend api running on http://localhost:${PORT}`);
  await ConnectDB();
});

export default app;

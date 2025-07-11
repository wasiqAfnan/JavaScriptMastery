import env from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import {connectDb} from "./src/db/config.js";
import authRoutes from "./src/routes/auth.routes.js"

const app = express();
env.config();

app.use(express.json());
app.use(cookieParser());

connectDb(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) =>
    err ? console.log("Error Occured While Connecting to DB", err) : ""
  );

app.use('/api/auth', authRoutes);

app.get("/api/dashboard", (req, res) => {
  res.status(200).json({ message: "This is protected routes" });
});

app.all(/./, (req, res) => {
  res.status(404).json({ message: "Invalid Routes" });
});

export default app;

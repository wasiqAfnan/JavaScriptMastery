import env from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

const app = express();
env.config();

app.use(express.json());
app.use(cookieParser());

// app.use('/api/auth', authRoutes);

app.get("/api/dashboard", (req, res) => {
  res.status(200).json({ message: "This is protected routes" });
});

app.all(/./, (req, res) => {
  res.status(404).json({ message: "Invalid Routes" });
});

export default app;

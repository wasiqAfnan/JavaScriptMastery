import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

// protected route
// app.use("/api/dashboard", authMiddleware, dashboardRoutes);

// handling all other incorrect routes
app.all(/./, (req, res) => {
    res.status(404).json({ message: "Invalid Routes" });
});

export default app;

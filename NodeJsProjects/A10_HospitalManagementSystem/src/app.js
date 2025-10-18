import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

// for handling form data
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.use("/api/test", userRoutes);
app.use("/api/user", userRoutes);

// protected route
// app.use("/api/dashboard", authMiddleware, dashboardRoutes);

// handling all other incorrect routes
app.all(/./, (req, res) => {
    res.status(404).json({ message: "Invalid Routes" });
});

// Error handling middleware
app.use(errorMiddleware);

export default app;

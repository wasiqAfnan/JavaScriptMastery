import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import healthCheckRoutes from "./routes/healthCheck.routes.js";

const app = express();

app.use(express.json());

// for handling form data
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

app.use("/api/test", healthCheckRoutes);
app.use("/api/user", userRoutes);

// handling all other incorrect routes
app.all(/./, (req, res) => {
    res.status(404).json({ message: "Invalid Routes" });
});

// Error handling middleware
app.use(errorMiddleware);

export default app;

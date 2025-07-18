import env from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import { connectDb } from "./src/db/config.js";
import authRoutes from "./src/routes/auth.routes.js";
import { authMiddleware } from "./src/middlewares/auth.middlewares.js";
import dashboardRoutes from "./src/routes/dashboard.routes.js";

const app = express();
env.config();

app.use(express.json());
app.use(cookieParser());

connectDb(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) =>
        err ? console.log("Error Occured While Connecting to DB", err) : ""
    );

app.use("/api/auth", authRoutes);

// protected route
// before jumping to the controller function middleware fubction will be executed
// then only controller function executed
app.use("/api/dashboard", authMiddleware, dashboardRoutes);

// handling all other incorrect routes
app.all(/./, (req, res) => {
    res.status(404).json({ message: "Invalid Routes" });
});

export default app;

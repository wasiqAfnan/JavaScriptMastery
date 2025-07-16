import express from "express";
import {
    handleRegister,
    handleLogin,
    handleLogout,
    handleDashboard,
} from "../controllers/user.controllers.js";
import { isLoggedIn } from "../middlewares/user.middlewares.js";

const userRoutes = express.Router();

userRoutes.route("/register").post(handleRegister);
userRoutes.route("/login").post(handleLogin);
userRoutes.route("/logout").post(handleLogout);
userRoutes.route("/dashboard").post(isLoggedIn, handleDashboard);

export default userRoutes;

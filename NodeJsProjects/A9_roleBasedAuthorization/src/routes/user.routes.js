import express from "express";
import {
    handleRegister,
    handleLogin,
    handleLogout,
} from "../controllers/user.controllers.js";

const authRoutes = express.Router();

authRoutes.route("/register").post(handleRegister);
authRoutes.route("/login").post(handleLogin);
authRoutes.route("/logout").post(handleLogout);

export default authRoutes;

import express from "express";
import {
    handleRegister,
    handleLogin,
    handleLogout,
} from "../controllers/user.controllers.js";
import { isLoggedIn, isAuthorized } from "../middlewares/auth.middlewares.js";

const userRoutes = express.Router();

userRoutes.route("/register").post(handleRegister);
userRoutes.route("/login").post(handleLogin);
userRoutes.route("/logout").post(handleLogout);


export default userRoutes;

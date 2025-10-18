import express from "express";
import {
    handleRegister,
    handleLogin,
    handleLogout,
    handleDashboard,
    handleGetAllUser,
} from "../controllers/user.controllers.js";
import { isLoggedIn, isAuthorized } from "../middlewares/auth.middlewares.js";

const userRoutes = express.Router();

userRoutes.route("/register").post(handleRegister);
userRoutes.route("/login").post(handleLogin);
userRoutes.route("/logout").post(handleLogout);
userRoutes.route("/dashboard").post(isLoggedIn, handleDashboard);
userRoutes
    .route("/analytics")
    .post(isLoggedIn, isAuthorized("ADMIN"), handleGetAllUser);

export default userRoutes;

import express from "express";
import {
    handleBasicGetRequest,
    handleRegister,
    handleLogin,
    handleLogout
} from "../controllers/auth.controllers.js";

const routes = express.Router();

routes.get("/", handleBasicGetRequest);

routes.post("/register", handleRegister);
routes.post("/login", handleLogin);
routes.post("/logout", handleLogout);

export default routes;

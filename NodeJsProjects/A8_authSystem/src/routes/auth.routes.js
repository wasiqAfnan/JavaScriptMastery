import express from "express";
import {
  handleBasicGetRequest,
  handleRegister,
} from "../controllers/auth.controllers.js";

const routes = express.Router();

routes.get("/", handleBasicGetRequest);

routes.post("/register", handleRegister);

export default routes;

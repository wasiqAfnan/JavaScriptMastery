import { Router } from "express";
import {
    handleDbPing,
    handleHealthCheck,
} from "../controllers/healthCheck.controller.js";

const healthCheckRoutes = Router();

healthCheckRoutes.get("/", handleHealthCheck);

healthCheckRoutes.get("/db-ping", handleDbPing);

export default healthCheckRoutes;

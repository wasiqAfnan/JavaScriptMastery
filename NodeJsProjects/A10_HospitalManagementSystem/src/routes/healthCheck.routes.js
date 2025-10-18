import { Router } from "express";
import mongoose from "mongoose";

const healthCheckRoutes = Router();

healthCheckRoutes.get("/", handleHealthCheck);

healthCheckRoutes.get("/db-ping", handleDbPing);

export default healthCheckRoutes;
import express from "express";

const dashboardRoutes = express.Router();

dashboardRoutes.get("/", (req, res) => {
    res.status(200).json({ message: `Welcome ${req.user.name} to Dashboard` });
});

export default dashboardRoutes;

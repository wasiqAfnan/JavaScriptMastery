import express from "express";
import { createOrderController, verifyPaymentController } from "../controllers/payment.controller.js";

const router = express.Router();

/*
    Create Razorpay Order
*/
router.post("/create-order", createOrderController);

/*
    Verify Payment Signature
*/
router.post("/verify-payment", verifyPaymentController);

/*
    Razorpay Webhook
*/
router.post("/webhook", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Webhook route working",
    });
});

export default router;

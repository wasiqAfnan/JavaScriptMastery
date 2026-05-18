import express from "express";

const router = express.Router();

/*
    Create Razorpay Order
*/
router.post("/create-order", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Create order route working",
    });
});

/*
    Verify Payment Signature
*/
router.post("/verify-payment", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "Verify payment route working",
    });
});

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

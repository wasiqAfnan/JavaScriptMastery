import { createRazorpayOrder } from "../services/payment.service.js";
import verifyPaymentSignature from "../utils/verifySignature.js";

/*
    Create Order Controller
*/
export const createOrderController = async (req, res) => {
  try {
    const { amount } = req.body;

    /*
            Basic Validation
        */
    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount is required",
      });
    }

    /*
            Convert amount to number
        */
    const numericAmount = Number(amount);

    if (isNaN(numericAmount) || numericAmount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid amount",
      });
    }

    /*
            Convert INR to paise
        */
    const amountInPaise = numericAmount * 100;

    /*
            Create Razorpay Order
        */
    const order = await createRazorpayOrder({
      amount: amountInPaise,
      currency: "INR",
    });

    /*
            Success Response
        */
    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: {
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: order.receipt,
        status: order.status,
      },
    });
  } catch (error) {
    console.error("Create Order Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order",
      error: error.message,
    });
  }
};

export const verifyPaymentController = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    // validation
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "All payment fields are required",
      });
    }

    // verigy signature
    const isAuthentic = verifyPaymentSignature({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    });

    // handle invalid signature
    if (!isAuthentic) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment signature",
      });
    }

    /*
        TODO:Store successful payment in DB
    */
    // Example:
    // payment_id
    // order_id
    // payment status
    // user info

    return res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      data: {
        razorpay_order_id,
        razorpay_payment_id,
      },
    });
  } catch (error) {
    console.error("Verify Payment Error:", error);

    return res.status(500).json({
      success: false,
      message: "Payment verification failed",
      error: error.message,
    });
  }
};

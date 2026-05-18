import crypto from "crypto";

/*
    Verify Razorpay Payment Signature
*/
const verifyPaymentSignature = ({
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
}) => {

    /*
        Generate Expected Signature
    */
    const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(
            `${razorpay_order_id}|${razorpay_payment_id}`
        )
        .digest("hex");

    /*
        Compare Signatures
    */
    return generatedSignature === razorpay_signature;
};

export default verifyPaymentSignature;


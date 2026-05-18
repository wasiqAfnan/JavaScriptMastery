import razorpayInstance from "../config/razorpay.config.js";

/*
    Create Razorpay Order Service
*/
export const createRazorpayOrder = async ({ amount, currency }) => {
    /*
        Create unique receipt id
    */
    const receipt = `rcpt_${Date.now()}`;

    /*
        Razorpay Order Options
    */
    const options = {
        amount,
        currency,
        receipt,
    };

    /*
        Create Order
    */
    const order = await razorpayInstance.orders.create(options);

    /*
        TODO:
        Store order details in DB later
    */
    // Example:
    // order.id
    // order.amount
    // order.currency
    // order.receipt

    return order;
};


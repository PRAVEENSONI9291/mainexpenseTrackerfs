const axios = require("axios");
require("dotenv").config({ path: "./util/.env" });


const CASHFREE_BASE_URL = "https://sandbox.cashfree.com/pg"; // Use live URL for production
const API_VERSION = "2022-09-01";

const CASHFREE_HEADERS = {
  "Content-Type": "application/json",
  "x-client-id": process.env.CASHFREE_APP_ID,
  "x-client-secret": process.env.CASHFREE_SECRET_KEY,
  "x-api-version": API_VERSION,
};

const createOrder = async ({ orderId, orderAmount, customer }) => {
  try {
    const response = await axios.post(
      `${CASHFREE_BASE_URL}/orders`,
      {
        order_id: orderId,
        order_amount: orderAmount,
        order_currency: "INR",
        customer_details: {
          customer_id: customer,
          customer_email: "praveen@gmail.com",
          customer_phone: "9999999999",
        },
      },
      {
        headers: CASHFREE_HEADERS,
      }
    );

    return response.data;
  } catch (error) {
    console.error("❌ Error creating Cashfree order:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = {
  createOrder,
};

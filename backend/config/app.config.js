require("dotenv").config();

const STRIPE_CONFIG = {
    SECRET_KEY: process.env.SECRET_KEY,
    CURRENCY: process.env.CURRENCY,
    SUCCESS_URL: process.env.SUCCESS_URL,
    CANCEL_URL: process.env.CANCEL_URL
};

module.exports = {
    STRIPE_CONFIG
};
const { STRIPE_CONFIG } = require("../config/app.config");

const stripe = require("stripe")(STRIPE_CONFIG.SECRET_KEY);

async function createSession(params, callback) {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [{ price: params.priceId, quantity: 1 }],
        mode: "payment",
        success_url: STRIPE_CONFIG.SUCCESS_URL,
        cancel_url: STRIPE_CONFIG.CANCEL_URL,
    });

    callback({ id: session.id });
}

module.exports = {
    createSession,
};

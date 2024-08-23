const stripeServices = require("../services/stripe.services");

exports.createPaymentSession = (req, res, next) => {
    stripeServices.createSession({ priceId: req.body.priceId }, (response) => {
        return res.status(200).send(response);
    });
};
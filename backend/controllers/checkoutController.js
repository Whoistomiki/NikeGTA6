/* 
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const checkoutController = {
    createPaymentIntent: async (req, res) => {
        const { cart, total } = req.body;
    
        const paymentIntent = await stripe.paymentIntents.create({
        amount: total * 100,
        currency: 'usd',
        });
    
        return res.status(200).json({
        clientSecret: paymentIntent.client_secret,
        });
    },
    };

module.exports = checkoutController;
*/    
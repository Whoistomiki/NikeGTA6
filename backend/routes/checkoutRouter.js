const { Router } = require('express');
const checkoutController = require('../controllers/checkoutController');
const checkoutRouter = new Router();

checkoutRouter.post('/create-payment-intent', checkoutController.createPaymentIntent);

module.exports = checkoutRouter;

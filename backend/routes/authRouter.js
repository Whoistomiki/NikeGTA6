const { Router } = require('express');
const authController = require('../controllers/authController');
const authRouter = new Router();

authRouter.post('/login', authController.loginAction);
authRouter.post('/signup', authController.signupAction);
authRouter.get('/logout', authController.logout);
// authRouter.post('/forgotpassword', authController.forgotPassword);
// authRouter.post('/resetpassword', authController.resetPassword);

module.exports = authRouter;

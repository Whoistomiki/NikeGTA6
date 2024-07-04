const { User } = require('../models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const config = require('../helper/authConfig');

const authController = {
  loginAction: async (req, res) => {
    try {
      const user = await User.findOne({
      where: {
        email : req.body.email,
      },
    });

    if (!user) {
      return res.status(400).json('Email not found');
    }

    const result = await bcrypt.compare(req.body.password, user.password);

    if (!result) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    return res.status(200).json({ token, user });
    } catch (error) {
    return res.status(500).json({ message: 'An error occurred during login', error: error.message });
    }
  },

  signupAction: async (req, res) => {
    try {
    if (req.body.password !== req.body.passwordConfirm) {
      return res.status(400).json('Password need to be identical');
    }

    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
    const user = await User.create(req.body);

    if (user) {
      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: config.jwtExpiration,
      });

      return res.status(201).send({ token, user });
    } else {
      return res.status(409).send('Mail already exist');
    }
    } catch (error) {
      return res.status(500).json({ message: 'Mail already exist', error: error.message });
    }
  },

  logout: (req, res) => {
    req.user = null;
    return res.status(200).json('You have been disconnected');
  },

  /*
  forgotPassword: async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(400).json('User not found');
    }
    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: '1h',
    });
    return res.status(200).json({ token });
  },
  */

  /* resetPassword: async (req, res) => {
    const { token, password, passwordConfirm } = req.body;
    if (password !== passwordConfirm) {
      return res.status(400).json('password need to be identical');
    }
    const decoded = jwt.verify(token, config.secret);
    const user = await User.findByPk(decoded.id);
    user.password = await bcrypt.hash(password, 10);
    await user.save();
    return res.status(200).json('Password has been changed');
  },
  */
};

module.exports = authController;

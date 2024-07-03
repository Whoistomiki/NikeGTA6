const { User } = require("../models");
const bcrypt = require("bcrypt");

const userController = {
  getUser: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json(`User not found`);
      }
      res.status(200).json(user);
    } catch (error) {
      console.error('Error in getUser:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  
  modifyUser: async (req, res) => {
    const userId = req.params.id;
    const { firstname, lastname, email, password } = req.body;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json(`Can't find user with id ${userId}`);
      }

      if (firstname) {
        user.firstname = firstname;
      }
      if (lastname) {
        user.lastname = lastname;
      }
      if (email) {
        user.email = email;
      }
      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }

      await user.save();

      return res.status(200).json(user.toJSON());
    } catch (error) {
      console.error('Error in modifyUser:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json(`Can't find user with id ${userId}`);
      }

      await user.destroy();

      return res.status(200).json(`User profile with id ${userId} has been deleted`);
    } catch (error) {
      console.error('Error in deleteUser:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
};

module.exports = userController;

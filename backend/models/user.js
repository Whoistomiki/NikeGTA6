/* const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database.js"); // Correction de l'importation

class User extends Model {}

User.init(
  {
    firstname: {
      type: DataTypes.TEXT,
    },
    lastname: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      isEmail: true,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    passwordConfirm: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  },
  {
    sequelize,
    tableName: 'user'
  }
);

module.exports = User;
*/

// models/user.js

const { DataTypes, Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URL);

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstname: {
    type: DataTypes.TEXT,
  },
  lastname: {
    type: DataTypes.TEXT,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = User;

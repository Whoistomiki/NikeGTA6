const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Modèles
const User = require('./user')(sequelize, DataTypes);
const Order = require('./order')(sequelize, DataTypes);
const OrderItem = require('./orderItem')(sequelize, DataTypes);
const Product = require('./product')(sequelize, DataTypes);

// Associations
Order.belongsTo(User)
User.hasMany(Order)

OrderItem.belongsTo(Order)
Order.hasMany(OrderItem)

OrderItem.belongsTo(Product)
Product.hasMany(OrderItem)

// Export des modèles
module.exports = {
  User,
  Order,
  OrderItem,
  Product,
  sequelize
};

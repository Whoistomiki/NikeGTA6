const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Product = sequelize.define('Product', {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    product_price: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false
    },
    product_size: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  return Product;
};

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OrderItem = sequelize.define('orderItem', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unit_price: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false
    }
  }, {
    timestamps: false
  });

  return OrderItem;
};

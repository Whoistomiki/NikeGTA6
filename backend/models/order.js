const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Order = sequelize.define('Order', {
    order_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    order_status: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    total_amount: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false
    }
  });

  return Order;
};

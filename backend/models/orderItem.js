const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const orderItem = sequelize.define('orderItem', {
    order_item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unit_price: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: false
    }
  });

  return orderItem;
};

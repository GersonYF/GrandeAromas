module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    shopping_address_id: DataTypes.INTEGER,
    payment_address_id: DataTypes.INTEGER,
    total_price: DataTypes.FLOAT,
    order_status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  });

  return Order;
};

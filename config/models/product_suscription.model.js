module.exports = (sequelize, DataTypes) => {
  const ProductSubscription = sequelize.define('ProductSubscription', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: DataTypes.INTEGER,
    subscription_id: DataTypes.INTEGER
  });

  return ProductSubscription;
};

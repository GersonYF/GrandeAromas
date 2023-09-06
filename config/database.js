const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,
});

const User = require('./models/user.model')(sequelize, Sequelize.DataTypes);
const Address = require('./models/address.model')(sequelize, Sequelize.DataTypes);
const CoffeeShop = require('./models/coffee_shop.model')(sequelize, Sequelize.DataTypes);
const Order = require('./models/order.model')(sequelize, Sequelize.DataTypes);
const ProductCategory = require('./models/product_category.model')(sequelize, Sequelize.DataTypes);
const ProductReview = require('./models/product_review.model')(sequelize, Sequelize.DataTypes);
const ProductSubscription = require('./models/product_subscription.model')(sequelize, Sequelize.DataTypes);
const ProductOrder = require('./models/products_order.model')(sequelize, Sequelize.DataTypes);
const Product = require('./models/products.model')(sequelize, Sequelize.DataTypes);
const Subscription = require('./models/subscription.model')(sequelize, Sequelize.DataTypes);

// Coffee Shop to User
CoffeeShop.belongsTo(User, { foreignKey: 'user_contact_id' });
User.hasMany(CoffeeShop, { foreignKey: 'user_contact_id' });

// Product to ProductCategory
Product.belongsTo(ProductCategory, { foreignKey: 'category_id' });
ProductCategory.hasMany(Product, { foreignKey: 'category_id' });

// ProductReview to User & Product
ProductReview.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(ProductReview, { foreignKey: 'user_id' });

ProductReview.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(ProductReview, { foreignKey: 'product_id' });

// ProductOrder to Product & Order
ProductOrder.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(ProductOrder, { foreignKey: 'product_id' });

ProductOrder.belongsTo(Order, { foreignKey: 'order_id' });
Order.hasMany(ProductOrder, { foreignKey: 'order_id' });

// Order to Address (shopping and payment) & User
Order.belongsTo(Address, { as: 'shoppingAddress', foreignKey: 'shopping_address_id' });
Order.belongsTo(Address, { as: 'paymentAddress', foreignKey: 'payment_address_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Order, { foreignKey: 'user_id' });

// ProductSubscription to Product & Subscription
ProductSubscription.belongsTo(Product, { foreignKey: 'product_id' });
Product.hasMany(ProductSubscription, { foreignKey: 'product_id' });

ProductSubscription.belongsTo(Subscription, { foreignKey: 'subscription_id' });
Subscription.hasMany(ProductSubscription, { foreignKey: 'subscription_id' });

Address.belongsTo(User, {  // Establishing the relationship
  foreignKey: 'userId',
  as: 'user'  // alias
});

module.exports = {
  User,
  Address,
  CoffeeShop,
  Order,
  ProductCategory,
  ProductReview,
  ProductSubscription,
  ProductOrder,
  Product,
  Subscription,
  sequelize
};

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const logger = require('../config/logger');
const logger = require('/var/www/html/config/logger');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//const db = require('../config/database');
const db = require('/var/www/html/config/database');
db.sequelize.sync();

// Rutas
app.use('/api/sales/dashboard', require('./app/routes/dashboard.routes'));
app.use('/api/coffee_shops', require('./app/routes/coffee_shop.routes'));
app.use('/api/product_categories', require('./app/routes/product_category.routes'));
app.use('/api/products', require('./app/routes/products.routes'));
app.use('/api/product_reviews', require('./app/routes/product_reviews.routes'));
app.use('/api/product_orders', require('./app/routes/product_orders.routes'));
app.use('/api/orders', require('./app/routes/orders.routes'));
app.use('/api/addresses', require('./app/routes/address.routes'));
app.use('/api/subscriptions', require('./app/routes/subscription.routes'));
app.use('/api/product_suscriptions', require('./app/routes/product_subscriptions.routes'));


app.listen(port, () => {
  logger.info(`Servidor corriendo en el puerto ${port}`);
});

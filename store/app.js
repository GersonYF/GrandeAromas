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
app.use('/api/coffee_shops', require('./routes/coffee_shop.routes'));
app.use('/api/product_categories', require('./routes/product_category.routes'));
app.use('/api/products', require('./routes/products.routes'));
app.use('/api/product_reviews', require('./routes/product_review.routes'));
app.use('/api/product_orders', require('./routes/product_orders.routes'));
app.use('/api/orders', require('./routes/orders.routes'));
app.use('/api/addresses', require('./routes/address.routes'));
app.use('/api/subscriptions', require('./routes/subscriptions.routes'));
app.use('/api/product_suscriptions', require('./routes/product_subscriptions.routes'));


app.listen(port, () => {
  logger.info(`Servidor corriendo en el puerto ${port}`);
});

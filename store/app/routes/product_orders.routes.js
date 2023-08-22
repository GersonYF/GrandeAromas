// routes/productOrderRoutes.js

const express = require('express');
const router = express.Router();
const productOrderController = require('../controllers/product_orders.controller');

const { authMiddleware } = require('/var/www/html/config/middlewares');

router.post('/create', authMiddleware, productOrderController.createProductOrder);
router.get('/', authMiddleware, productOrderController.getAllProductOrders);
router.get('/:orderId', authMiddleware, productOrderController.getProductOrderById);
router.put('/:orderId', authMiddleware, productOrderController.updateProductOrder);
router.delete('/:orderId', authMiddleware, productOrderController.deleteProductOrder);

module.exports = router;

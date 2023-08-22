// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orders.controller');

const { authMiddleware } = require('/var/www/html/config/middlewares');

router.post('/create', authMiddleware, orderController.createOrder);
router.get('/', authMiddleware, orderController.getAllOrders);
router.get('/:orderId', authMiddleware, orderController.getOrderById);
router.put('/:orderId', authMiddleware, orderController.updateOrder);
router.delete('/:orderId', authMiddleware, orderController.deleteOrder);

module.exports = router;

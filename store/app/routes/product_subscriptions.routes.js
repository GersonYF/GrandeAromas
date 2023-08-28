// routes/productSuscriptionRoutes.js

const express = require('express');
const router = express.Router();
const productSuscriptionController = require('../controllers/product_subscription.controller');

const { authMiddleware } = require('../../../config/middlewares');

router.post('/create', authMiddleware, productSuscriptionController.createProductSuscription);
router.get('/', authMiddleware, productSuscriptionController.getAllProductSuscriptions);
router.get('/:productSuscriptionId', authMiddleware, productSuscriptionController.getProductSuscriptionById);
router.delete('/:productSuscriptionId', authMiddleware, productSuscriptionController.deleteProductSuscription);

module.exports = router;

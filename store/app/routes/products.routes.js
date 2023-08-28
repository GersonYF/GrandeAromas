// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');

const { authMiddleware } = require('../../../config/middlewares');

router.post('/create', authMiddleware, productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.put('/:productId', authMiddleware, productController.updateProduct);
router.delete('/:productId', authMiddleware, productController.deleteProduct);

module.exports = router;

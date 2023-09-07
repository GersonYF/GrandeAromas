// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controller');
const productReviewController = require('../controllers/product_reviews.controller');

const { authMiddleware } = require('../../../config/middlewares');

router.post('/', authMiddleware, productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.put('/:productId', authMiddleware, productController.updateProduct);
router.delete('/:productId', authMiddleware, productController.deleteProduct);
router.get('/:productId/reviews', productReviewController.getProductReviewsByProductId);

module.exports = router;

// routes/productReviewRoutes.js

const express = require('express');
const router = express.Router();
const productReviewController = require('../controllers/product_reviews.controller');

const { authMiddleware } = require('../../../config/middlewares');

router.post('/create', authMiddleware, productReviewController.createProductReview);
router.get('/', productReviewController.getAllProductReviews);
router.get('/:reviewId', productReviewController.getProductReviewById);
router.put('/:reviewId', authMiddleware, productReviewController.updateProductReview);
router.delete('/:reviewId', authMiddleware, productReviewController.deleteProductReview);

module.exports = router;

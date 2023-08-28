// routes/productCategoryRoutes.js

const express = require('express');
const router = express.Router();
const productCategoryController = require('../controllers/product_category.controller');

const { authMiddleware } = require('../../../config/middlewares');

router.post('/create', authMiddleware, productCategoryController.createProductCategory);
router.get('/', productCategoryController.getAllProductCategories);
router.get('/:categoryId', productCategoryController.getProductCategoryById);
router.put('/:categoryId', authMiddleware, productCategoryController.updateProductCategory);
router.delete('/:categoryId', authMiddleware, productCategoryController.deleteProductCategory);

module.exports = router;

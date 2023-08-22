// routes/coffeeShopRoutes.js

const express = require('express');
const router = express.Router();
const coffeeShopController = require('../controllers/coffee_shop.controller');

const { authMiddleware } = require('/var/www/html/config/middlewares');

router.post('/create', authMiddleware, coffeeShopController.createCoffeeShop);
router.get('/', coffeeShopController.getAllCoffeeShops);
router.get('/:shopId', coffeeShopController.getCoffeeShopById);
router.put('/:shopId', authMiddleware, coffeeShopController.updateCoffeeShop);
router.delete('/:shopId', authMiddleware, coffeeShopController.deleteCoffeeShop);

module.exports = router;

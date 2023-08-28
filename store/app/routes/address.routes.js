// routes/addressRoutes.js

const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address.controller');

const { authMiddleware } = require('../../../config/middlewares');

router.post('/create', authMiddleware, addressController.createAddress);
router.get('/', authMiddleware, addressController.getAllAddresses);
router.get('/:addressId', authMiddleware, addressController.getAddressById);
router.put('/:addressId', authMiddleware, addressController.updateAddress);
router.delete('/:addressId', authMiddleware, addressController.deleteAddress);

module.exports = router;

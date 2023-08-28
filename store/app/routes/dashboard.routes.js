const express = require('express');
const router = express.Router();
//const { authMiddleware } = require('../../../config/middlewares');
const { authMiddleware } = require('../../../config/middlewares');
const dashboardController = require('../controllers/dashboard.controller');

router.get('/counts', authMiddleware, dashboardController.getReport1);

module.exports = router;

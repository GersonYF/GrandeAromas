// routes/suscriptionRoutes.js

const express = require('express');
const router = express.Router();
const suscriptionController = require('../controllers/subscription.controller');

const { authMiddleware } = require('../../../config/middlewares');

router.post('/create', authMiddleware, suscriptionController.createSuscription);
router.get('/', authMiddleware, suscriptionController.getAllSuscriptions);
router.get('/:suscriptionId', authMiddleware, suscriptionController.getSuscriptionById);
router.put('/:suscriptionId', authMiddleware, suscriptionController.updateSuscription);
router.delete('/:suscriptionId', authMiddleware, suscriptionController.deleteSuscription);

module.exports = router;

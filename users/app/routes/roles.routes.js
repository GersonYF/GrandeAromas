const express = require('express');
const router = express.Router();

// Import roleController
const roleController = require('./controllers/roleController');

// Import any middleware, if you have them and want to apply them to these routes
// For demonstration purposes, I'll assume you might have an authentication middleware, but you can remove it if not needed
const { authMiddleware } = require('/var/www/html/config/middlewares');

// Route to create a new role
router.post('/roles', authMiddleware, roleController.createRole);

// Route to get all roles
router.get('/roles', authMiddleware, roleController.getRoles);

// Route to get a specific role by its ID
router.get('/roles/:roleId', authMiddleware, roleController.getRoleById);

// Route to update a specific role by its ID
router.put('/roles/:roleId', authMiddleware, roleController.updateRole);

// Route to delete a specific role by its ID
router.delete('/roles/:roleId', authMiddleware, roleController.deleteRole);

module.exports = router;

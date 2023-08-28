// controllers/productOrderController.js

const { ProductOrder } = require('../../../config/database');

// Create a new product order
exports.createProductOrder = async (req, res) => {
  try {
    const { product_id, order_id, quantity } = req.body;
    const productOrder = await ProductOrder.create({ product_id, order_id, quantity });
    res.status(201).send(productOrder);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get all product orders
exports.getAllProductOrders = async (req, res) => {
  try {
    const productOrders = await ProductOrder.findAll();
    res.json(productOrders);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a specific product order by its ID
exports.getProductOrderById = async (req, res) => {
  try {
    const productOrder = await ProductOrder.findByPk(req.params.orderId);
    if (productOrder) {
      res.json(productOrder);
    } else {
      res.status(404).json({ message: 'Product Order not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update a specific product order by its ID
exports.updateProductOrder = async (req, res) => {
  try {
    const productOrder = await ProductOrder.findByPk(req.params.orderId);
    if (productOrder) {
      productOrder.product_id = req.body.product_id || productOrder.product_id;
      productOrder.order_id = req.body.order_id || productOrder.order_id;
      productOrder.quantity = req.body.quantity || productOrder.quantity;

      await productOrder.save();
      res.json(productOrder);
    } else {
      res.status(404).json({ message: 'Product Order not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a specific product order by its ID
exports.deleteProductOrder = async (req, res) => {
  try {
    const productOrder = await ProductOrder.findByPk(req.params.orderId);
    if (productOrder) {
      await productOrder.destroy();
      res.json({ message: 'Product Order deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product Order not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

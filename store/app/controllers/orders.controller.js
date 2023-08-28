// controllers/orderController.js

const { Order } = require('../../../config/database');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { user_id, shopping_address_id, payment_address_id, total_price, order_status } = req.body;
    const order = await Order.create({
      user_id,
      shopping_address_id,
      payment_address_id,
      total_price,
      order_status
    });
    res.status(201).send(order);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a specific order by its ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update a specific order by its ID
exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    if (order) {
      order.user_id = req.body.user_id || order.user_id;
      order.shopping_address_id = req.body.shopping_address_id || order.shopping_address_id;
      order.payment_address_id = req.body.payment_address_id || order.payment_address_id;
      order.total_price = req.body.total_price || order.total_price;
      order.order_status = req.body.order_status || order.order_status;

      await order.save();
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a specific order by its ID
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.orderId);
    if (order) {
      await order.destroy();
      res.json({ message: 'Order deleted successfully' });
    } else {
      res.status(404).json({ message: 'Order not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

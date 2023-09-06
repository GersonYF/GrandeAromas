// controllers/orderController.js
const { Address, Order, ProductOrder, Product, User } = require('../../../config/database');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    let { user_id, shopping_address_id, payment_address_id, products, order_status = 'pagada', shopping_address, payment_address } = req.body;

    // If shopping_address details are provided, create a new address entry
    if (shopping_address && !shopping_address_id) {
      const createdShoppingAddress = await Address.create({ ...shopping_address, userId: user_id });
      shopping_address_id = createdShoppingAddress.id;
    }

    // If payment_address details are provided, create a new address entry
    if (payment_address && !payment_address_id) {
      const createdPaymentAddress = await Address.create({ ...payment_address, userId: user_id });
      payment_address_id = createdPaymentAddress.id;
    }

    // Calculate total price based on the products and their quantities
    let totalPrice = 0;
    for (let product of products) {
      const productDetails = await Product.findByPk(product.id);
      if (productDetails) {
        totalPrice += productDetails.price * product.quantity;
      } else {
        // If the product doesn't exist in the database, send an error response
        return res.status(400).send({ message: `Product with ID ${product.id} not found` });
      }
    }

    // Create the main order entry with the calculated total price
    const order = await Order.create({
      user_id,
      shopping_address_id,
      payment_address_id,
      total_price: totalPrice,
      order_status
    });

    // Loop through the products and create associated ProductOrder entries
    for (let product of products) {
      await ProductOrder.create({
        product_id: product.id,
        order_id: order.id,
        quantity: product.quantity
      });
    }

    res.status(201).send(order);
  } catch (error) {
    console.log(error)
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
    const order = await Order.findByPk(req.params.orderId, {
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'email']  // Select only some attributes. You might want to exclude the password and other sensitive data
        },
        {
          model: Address,
          as: 'shoppingAddress',  // using an alias since you have two associations with the same model
          attributes: ['name', 'address', 'neighborhood', 'city', 'country', 'department', 'zip_code']
        },
        {
          model: Address,
          as: 'paymentAddress', // using an alias
          attributes: ['name', 'address', 'neighborhood', 'city', 'country', 'department', 'zip_code']
        }
      ]
    });

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

exports.getOrdersByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.findAll({
      where: { user_id: userId },
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'email']
        },
        {
          model: Address,
          as: 'shoppingAddress',
          attributes: ['name', 'address', 'neighborhood', 'city', 'country', 'department', 'zip_code']
        },
        {
          model: Address,
          as: 'paymentAddress',
          attributes: ['name', 'address', 'neighborhood', 'city', 'country', 'department', 'zip_code']
        }
      ]
    });

    if (orders && orders.length > 0) {
      res.json(orders);
    } else {
      res.status(404).json({ message: 'No orders found for this user' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

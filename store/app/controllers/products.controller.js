// controllers/productController.js

const { Product } = require('../../../config/database');

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, category_id, description, quantity, unit, price } = req.body;
    const product = await Product.create({ name, category_id, description, quantity, unit, price });
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a list of all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a specific product by its ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update a specific product by its ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    if (product) {
      product.name = req.body.name || product.name;
      product.category_id = req.body.category_id || product.category_id;
      product.description = req.body.description || product.description;
      product.quantity = req.body.quantity || product.quantity;
      product.unit = req.body.unit || product.unit;
      product.price = req.body.price || product.price;

      await product.save();
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a specific product by its ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.productId);
    if (product) {
      await product.destroy();
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// controllers/productSuscriptionController.js

const { ProductSuscription } = require('../../../config/database');

// Create a new product_suscription
exports.createProductSuscription = async (req, res) => {
  try {
    const { product_id, suscription_id } = req.body;
    const productSuscription = await ProductSuscription.create({ product_id, suscription_id });
    res.status(201).send(productSuscription);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get all product_suscriptions
exports.getAllProductSuscriptions = async (req, res) => {
  try {
    const productSuscriptions = await ProductSuscription.findAll();
    res.json(productSuscriptions);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a specific product_suscription by its ID
exports.getProductSuscriptionById = async (req, res) => {
  try {
    const productSuscription = await ProductSuscription.findByPk(req.params.productSuscriptionId);
    if (productSuscription) {
      res.json(productSuscription);
    } else {
      res.status(404).json({ message: 'Product Suscription not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a specific product_suscription by its ID
exports.deleteProductSuscription = async (req, res) => {
  try {
    const productSuscription = await ProductSuscription.findByPk(req.params.productSuscriptionId);
    if (productSuscription) {
      await productSuscription.destroy();
      res.json({ message: 'Product Suscription deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product Suscription not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

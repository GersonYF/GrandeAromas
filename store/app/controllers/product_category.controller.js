// controllers/productCategoryController.js

const { ProductCategory } = require('../../../config/database');

// Create a new product category
exports.createProductCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const productCategory = await ProductCategory.create({ name });
    res.status(201).send(productCategory);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a list of all product categories
exports.getAllProductCategories = async (req, res) => {
  try {
    const productCategories = await ProductCategory.findAll();
    res.json(productCategories);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a specific product category by its ID
exports.getProductCategoryById = async (req, res) => {
  try {
    const productCategory = await ProductCategory.findByPk(req.params.categoryId);
    if (productCategory) {
      res.json(productCategory);
    } else {
      res.status(404).json({ message: 'Product Category not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update a specific product category by its ID
exports.updateProductCategory = async (req, res) => {
  try {
    const productCategory = await ProductCategory.findByPk(req.params.categoryId);
    if (productCategory) {
      productCategory.name = req.body.name || productCategory.name;

      await productCategory.save();
      res.json(productCategory);
    } else {
      res.status(404).json({ message: 'Product Category not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a specific product category by its ID
exports.deleteProductCategory = async (req, res) => {
  try {
    const productCategory = await ProductCategory.findByPk(req.params.categoryId);
    if (productCategory) {
      await productCategory.destroy();
      res.json({ message: 'Product Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product Category not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

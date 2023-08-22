// controllers/productReviewController.js

const { ProductReview } = require('/var/www/html/config/database');

// Create a new product review
exports.createProductReview = async (req, res) => {
  try {
    const { user_id, product_id, question, answer, stars } = req.body;
    const productReview = await ProductReview.create({ user_id, product_id, question, answer, stars });
    res.status(201).send(productReview);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get all product reviews
exports.getAllProductReviews = async (req, res) => {
  try {
    const productReviews = await ProductReview.findAll();
    res.json(productReviews);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a specific product review by its ID
exports.getProductReviewById = async (req, res) => {
  try {
    const productReview = await ProductReview.findByPk(req.params.reviewId);
    if (productReview) {
      res.json(productReview);
    } else {
      res.status(404).json({ message: 'Product Review not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update a specific product review by its ID
exports.updateProductReview = async (req, res) => {
  try {
    const productReview = await ProductReview.findByPk(req.params.reviewId);
    if (productReview) {
      productReview.question = req.body.question || productReview.question;
      productReview.answer = req.body.answer || productReview.answer;
      productReview.stars = req.body.stars || productReview.stars;

      await productReview.save();
      res.json(productReview);
    } else {
      res.status(404).json({ message: 'Product Review not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a specific product review by its ID
exports.deleteProductReview = async (req, res) => {
  try {
    const productReview = await ProductReview.findByPk(req.params.reviewId);
    if (productReview) {
      await productReview.destroy();
      res.json({ message: 'Product Review deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product Review not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

import API from './API';

const productReviewAPI = new API('product_reviews');

export const createProductReview = (reviewData) => {
  return productReviewAPI.create(reviewData);
};

export const getAllProductReviews = () => {
  return productReviewAPI.getAll();
};

export const getProductReviewById = (reviewId) => {
  return productReviewAPI.getById(reviewId);
};

export const updateProductReview = (reviewId, updatedReviewData) => {
  return productReviewAPI.update(reviewId, updatedReviewData);
};

export const deleteProductReview = (reviewId) => {
  return productReviewAPI.delete(reviewId);
};

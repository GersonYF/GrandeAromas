import API from './API';

const productAPI = new API('products');

export const createProduct = (productData) => {
  return productAPI.create(productData);
};

export const getAllProducts = () => {
  return productAPI.getAll();
};

export const getProductById = (productId) => {
  return productAPI.getById(productId);
};

export const updateProduct = (productId, updatedProductData) => {
  return productAPI.update(productId, updatedProductData);
};

export const deleteProduct = (productId) => {
  return productAPI.delete(productId);
};

export const getProductReviewsByProductIdAPI = (productId) => {
  return productAPI.getReviewsByProductId(productId);
};
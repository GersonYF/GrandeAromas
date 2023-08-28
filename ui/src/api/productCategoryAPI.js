import API from './API';

const productCategoryAPI = new API('product_categories');

export const createProductCategory = (categoryData) => {
  return productCategoryAPI.create(categoryData);
};

export const getAllProductCategories = () => {
  return productCategoryAPI.getAll();
};

export const getProductCategoryById = (categoryId) => {
  return productCategoryAPI.getById(categoryId);
};

export const updateProductCategory = (categoryId, updatedCategoryData) => {
  return productCategoryAPI.update(categoryId, updatedCategoryData);
};

export const deleteProductCategory = (categoryId) => {
  return productCategoryAPI.delete(categoryId);
};

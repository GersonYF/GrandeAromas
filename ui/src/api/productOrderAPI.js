import API from './API';

const productOrderAPI = new API('product_orders');

export const createProductOrder = (orderData) => {
  return productOrderAPI.create(orderData);
};

export const getAllProductOrders = () => {
  return productOrderAPI.getAll();
};

export const getProductOrderById = (orderId) => {
  return productOrderAPI.getById(orderId);
};

export const updateProductOrder = (orderId, updatedOrderData) => {
  return productOrderAPI.update(orderId, updatedOrderData);
};

export const deleteProductOrder = (orderId) => {
  return productOrderAPI.delete(orderId);
};

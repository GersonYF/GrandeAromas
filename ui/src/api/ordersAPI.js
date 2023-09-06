import API from './API';

const orderAPI = new API('orders');

export const createOrder = (orderData) => {
  return orderAPI.create(orderData);
};

export const getAllOrders = () => {
  return orderAPI.getAll();
};

export const getOrderById = (orderId) => {
  return orderAPI.getById(orderId);
};

export const updateOrder = (orderId, updatedOrderData) => {
  return orderAPI.update(orderId, updatedOrderData);
};

export const deleteOrder = (orderId) => {
  return orderAPI.delete(orderId);
};

export const getOrdersByMe = () => {
  return orderAPI.getOrdersByMe();
}
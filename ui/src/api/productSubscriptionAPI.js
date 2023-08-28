import API from './API';

const productSubscriptionAPI = new API('product_subscriptions');

export const createProductSubscription = (subscriptionData) => {
  return productSubscriptionAPI.create(subscriptionData);
};

export const getAllProductSubscriptions = () => {
  return productSubscriptionAPI.getAll();
};

export const getProductSubscriptionById = (subscriptionId) => {
  return productSubscriptionAPI.getById(subscriptionId);
};

export const deleteProductSubscription = (subscriptionId) => {
  return productSubscriptionAPI.delete(subscriptionId);
};

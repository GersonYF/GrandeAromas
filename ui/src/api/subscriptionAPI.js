import API from './API';

const subscriptionAPI = new API('subscriptions');

export const createSubscription = (subscriptionData) => {
  return subscriptionAPI.create(subscriptionData);
};

export const getAllSubscriptions = () => {
  return subscriptionAPI.getAll();
};

export const getSubscriptionById = (subscriptionId) => {
  return subscriptionAPI.getById(subscriptionId);
};

export const updateSubscription = (subscriptionId, updatedSubscriptionData) => {
  return subscriptionAPI.update(subscriptionId, updatedSubscriptionData);
};

export const deleteSubscription = (subscriptionId) => {
  return subscriptionAPI.delete(subscriptionId);
};

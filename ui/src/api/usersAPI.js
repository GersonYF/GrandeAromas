import API from './API';

const userAPI = new API('users');

export const getUserList = () => {
  return userAPI.getAll();
};

export const createUser = (userData) => {
  return userAPI.create(userData);
};

export const getUserById = (userId) => {
  return userAPI.getById(userId);
};

export const updateUser = (userId, updatedUserData) => {
  return userAPI.update(userId, updatedUserData);
};

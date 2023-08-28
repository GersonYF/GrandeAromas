import API from './API';

const addressAPI = new API('addresses');

export const createAddress = (address) => {
  return addressAPI.create(address);
};

export const getAllAddresses = () => {
  return addressAPI.getAll();
};

export const getAddressById = (addressId) => {
  return addressAPI.getById(addressId);
};

export const updateAddress = (addressId, updatedAddress) => {
  return addressAPI.update(addressId, updatedAddress);
};

export const deleteAddress = (addressId) => {
  return addressAPI.delete(addressId);
};

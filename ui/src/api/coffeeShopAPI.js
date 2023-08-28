import API from './API';

const coffeeShopAPI = new API('coffee_shops');

export const createCoffeeShop = (coffeeShop) => {
  return coffeeShopAPI.create(coffeeShop);
};

export const getAllCoffeeShops = () => {
  return coffeeShopAPI.getAll();
};

export const getCoffeeShopById = (shopId) => {
  return coffeeShopAPI.getById(shopId);
};

export const updateCoffeeShop = (shopId, updatedShop) => {
  return coffeeShopAPI.update(shopId, updatedShop);
};

export const deleteCoffeeShop = (shopId) => {
  return coffeeShopAPI.delete(shopId);
};

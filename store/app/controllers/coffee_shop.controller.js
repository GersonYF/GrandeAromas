// controllers/coffeeShopController.js

// const { CoffeeShop } = require('../../../config/database');
const { CoffeeShop } = require('../../../config/database');

// Create a new coffee shop
exports.createCoffeeShop = async (req, res) => {
  try {
    const { user_contact_id, name, address, city, country, phone_number } = req.body;
    const coffeeShop = await CoffeeShop.create({ user_contact_id, name, address, city, country, phone_number });
    res.status(201).send(coffeeShop);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a list of all coffee shops
exports.getAllCoffeeShops = async (req, res) => {
  try {
    const coffeeShops = await CoffeeShop.findAll();
    res.json(coffeeShops);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a specific coffee shop by its ID
exports.getCoffeeShopById = async (req, res) => {
  try {
    const coffeeShop = await CoffeeShop.findByPk(req.params.shopId);
    if (coffeeShop) {
      res.json(coffeeShop);
    } else {
      res.status(404).json({ message: 'Coffee Shop not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update a specific coffee shop by its ID
exports.updateCoffeeShop = async (req, res) => {
  try {
    const coffeeShop = await CoffeeShop.findByPk(req.params.shopId);
    if (coffeeShop) {
      coffeeShop.user_contact_id = req.body.user_contact_id || coffeeShop.user_contact_id;
      coffeeShop.name = req.body.name || coffeeShop.name;
      coffeeShop.address = req.body.address || coffeeShop.address;
      coffeeShop.city = req.body.city || coffeeShop.city;
      coffeeShop.country = req.body.country || coffeeShop.country;
      coffeeShop.phone_number = req.body.phone_number || coffeeShop.phone_number;

      await coffeeShop.save();
      res.json(coffeeShop);
    } else {
      res.status(404).json({ message: 'Coffee Shop not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a specific coffee shop by its ID
exports.deleteCoffeeShop = async (req, res) => {
  try {
    const coffeeShop = await CoffeeShop.findByPk(req.params.shopId);
    if (coffeeShop) {
      await coffeeShop.destroy();
      res.json({ message: 'Coffee Shop deleted successfully' });
    } else {
      res.status(404).json({ message: 'Coffee Shop not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

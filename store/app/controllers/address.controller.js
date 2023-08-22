// controllers/addressController.js

const { Address } = require('/var/www/html/config/database');

// Create a new address
exports.createAddress = async (req, res) => {
  try {
    const { name, address, neighborhood, city, country, department, zip_code } = req.body;
    const newAddress = await Address.create({ name, address, neighborhood, city, country, department, zip_code });
    res.status(201).send(newAddress);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get all addresses
exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.findAll();
    res.json(addresses);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a specific address by its ID
exports.getAddressById = async (req, res) => {
  try {
    const address = await Address.findByPk(req.params.addressId);
    if (address) {
      res.json(address);
    } else {
      res.status(404).json({ message: 'Address not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update a specific address by its ID
exports.updateAddress = async (req, res) => {
  try {
    const address = await Address.findByPk(req.params.addressId);
    if (address) {
      address.name = req.body.name || address.name;
      address.address = req.body.address || address.address;
      address.neighborhood = req.body.neighborhood || address.neighborhood;
      address.city = req.body.city || address.city;
      address.country = req.body.country || address.country;
      address.department = req.body.department || address.department;
      address.zip_code = req.body.zip_code || address.zip_code;

      await address.save();
      res.json(address);
    } else {
      res.status(404).json({ message: 'Address not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a specific address by its ID
exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByPk(req.params.addressId);
    if (address) {
      await address.destroy();
      res.json({ message: 'Address deleted successfully' });
    } else {
      res.status(404).json({ message: 'Address not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

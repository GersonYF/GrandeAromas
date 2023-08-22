// controllers/suscriptionController.js

const { Suscription } = require('/var/www/html/config/database');

// Create a new suscription
exports.createSuscription = async (req, res) => {
  try {
    const { user_id, name, discount, discount_unit, start_date, end_date } = req.body;
    const suscription = await Suscription.create({ user_id, name, discount, discount_unit, start_date, end_date });
    res.status(201).send(suscription);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get all suscriptions
exports.getAllSuscriptions = async (req, res) => {
  try {
    const suscriptions = await Suscription.findAll();
    res.json(suscriptions);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a specific suscription by its ID
exports.getSuscriptionById = async (req, res) => {
  try {
    const suscription = await Suscription.findByPk(req.params.suscriptionId);
    if (suscription) {
      res.json(suscription);
    } else {
      res.status(404).json({ message: 'Suscription not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Update a specific suscription by its ID
exports.updateSuscription = async (req, res) => {
  try {
    const suscription = await Suscription.findByPk(req.params.suscriptionId);
    if (suscription) {
      suscription.user_id = req.body.user_id || suscription.user_id;
      suscription.name = req.body.name || suscription.name;
      suscription.discount = req.body.discount || suscription.discount;
      suscription.discount_unit = req.body.discount_unit || suscription.discount_unit;
      suscription.start_date = req.body.start_date || suscription.start_date;
      suscription.end_date = req.body.end_date || suscription.end_date;

      await suscription.save();
      res.json(suscription);
    } else {
      res.status(404).json({ message: 'Suscription not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Delete a specific suscription by its ID
exports.deleteSuscription = async (req, res) => {
  try {
    const suscription = await Suscription.findByPk(req.params.suscriptionId);
    if (suscription) {
      await suscription.destroy();
      res.json({ message: 'Suscription deleted successfully' });
    } else {
      res.status(404).json({ message: 'Suscription not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

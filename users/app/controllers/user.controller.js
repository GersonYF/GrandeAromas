const { User } = require('../../../config/database');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, is_admin, is_staff } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      is_admin,
      is_staff
    });

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getUserList = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.json(userList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password; // Consider hashing the password if it's updated!
      user.is_admin = req.body.is_admin !== undefined ? req.body.is_admin : user.is_admin;
      user.is_staff = req.body.is_staff !== undefined ? req.body.is_staff : user.is_staff;
      
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

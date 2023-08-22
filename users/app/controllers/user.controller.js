const { User } = require('/var/www/html/config/database');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role_id } = req.body; // adjusted "fullname" to "name"

    const user = await User.create({
      name,  // adjusted "fullname" to "name"
      email,
      password,
      role_id  // added role_id to match the model
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
      user.name = req.body.name || user.name;  // adjusted "username" to "name"
      user.email = req.body.email || user.email;
      user.password = req.body.password || user.password;
      user.role_id = req.body.role_id || user.role_id;  // added role_id to match the model
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

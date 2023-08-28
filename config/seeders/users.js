const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Hash function to make code cleaner
    const hashPassword = async (password) => await bcrypt.hash(password, 10);

    // Dummy users for seeding
    const users = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: await hashPassword('password123'), // Hashing the password
        is_admin: true, 
        is_staff: false, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: await hashPassword('password456'), // Hashing the password
        is_admin: false, 
        is_staff: true, 
        createdAt: new Date(),
        updatedAt: new Date()
      }
      // ... Add more users as necessary
    ];

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

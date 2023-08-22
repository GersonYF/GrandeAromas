const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Dummy users for seeding
    const users = [
      {
        name: 'John Doe',
        email: 'john@example.com',
        password: await bcrypt.hash('password123', 10), // Hashing the password
        role_id: 1,  // Assuming this role exists in the 'rol' table
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: await bcrypt.hash('password456', 10), // Hashing the password
        role_id: 2,  // Assuming this role exists in the 'rol' table
        created_at: new Date(),
        updated_at: new Date()
      }
      // ... Add more users as necessary
    ];

    return queryInterface.bulkInsert('users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

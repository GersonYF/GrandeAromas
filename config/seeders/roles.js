module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Dummy roles for seeding
    const roles = [
      {
        name: 'Admin',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Usuario',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Vendedor',
        created_at: new Date(),
        updated_at: new Date()
      }
      // ... Add more roles as necessary
    ];

    return queryInterface.bulkInsert('rol', roles, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rol', null, {});
  }
};

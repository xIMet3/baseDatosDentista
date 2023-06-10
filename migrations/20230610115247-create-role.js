/**@type {import('sequelize-cli').Migration}*/
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Roles', [
      {id: 1,
        name: "SuperAdmin",
        createdAt: new Date(),
        updatedAt: new Date(),
        unique: true
      },
      {id: 2,
        name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {id: 3,
        name: "User",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
}
};
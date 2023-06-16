'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Roles', [
      
      {
        id: 1,
        name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Doctor",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "User",
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
   
  }
};

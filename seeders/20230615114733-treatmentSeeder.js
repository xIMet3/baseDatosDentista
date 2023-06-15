'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert ('Treatments', [
      {
        name: "Limpieza bucal",
        description: "Limpieza dental y encias requerida para la salud bucal.",
        price: "59.95€",
        createdAt: new Date(),
        updatedAt: new Date()
      },
        
      {
        name: "Extraccion",
        price: "49.95€",
        description: "Extraccion de cualquier pieza dental",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Implante",
        price: "899.95€",
        description: "Extraccion de cualquier pieza dental y sustitucion por implante dental",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
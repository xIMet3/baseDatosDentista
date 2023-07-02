"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Treatments", [
      {
        id: 1,
        name: "Limpieza bucal",
        description: "Limpieza dental y encias recomendada para la salud bucal.",
        price: "59.95€",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "Extraccion",
        price: "49.95€",
        description: "Extraccion de cualquier pieza dental",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "Implante",
        price: "899.95€",
        description:
          "Extraccion de cualquier pieza dental y sustitucion por implante dental",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: "Ortodoncia",
        price: "Desde 2499.95€",
        description:
          "Estudio y colocación de ortodóncia dental y posterior seguimiento.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: "Revisión bucal",
        price: "24.95€",
        description:
          "Revisión de dientes y encias.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        name: "Blanqueamiento dental",
        price: "49.95€",
        description:
          "Blanqueamiento dental.",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    
  },
};

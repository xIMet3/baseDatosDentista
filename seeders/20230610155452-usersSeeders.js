"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          name: "Ximo",
          email: "ximo@mail.com",
          password: bcrypt.hashSync("admin123", 6),
          telephoneNumber: "666555444",
          role_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Dr. Jesús Vázkez",
          email: "jesus@mail.com",
          password: bcrypt.hashSync("admin123", 6),
          telephoneNumber: "666444333",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Dr. Carlos Redondo",
          email: "carlos@mail.com",
          password: bcrypt.hashSync("admin123", 6),
          telephoneNumber: "666333222",
          role_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Alex",
          email: "alex@mail.com",
          password: bcrypt.hashSync("admin123", 6),
          telephoneNumber: "666222111",
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Javi",
          email: "javi@mail.com",
          password: bcrypt.hashSync("admin123", 6),
          telephoneNumber: "666111000",
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Marta",
          email: "marta@mail.com",
          password: bcrypt.hashSync("admin123", 6),
          telephoneNumber: "666999888",
          role_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {},
};

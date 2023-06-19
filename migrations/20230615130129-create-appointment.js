"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Appointments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      doctor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          where: {
            role_id: 2,
          },
        },
      },
      users_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          where: {
            role_id: 3,
          },
        },
      },
      description: {
        type: Sequelize.STRING,
        // references: {
        //   model: "Treatments",
        //   key: "description"
        // }
      },
      treatment_id: {
        type: Sequelize.STRING,
        references: {
          model: "Treatments",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Appointments");
  },
};

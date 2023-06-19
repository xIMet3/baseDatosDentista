"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      Appointment.belongsTo(models.User, {
        foreignKey: "doctor_id",
        as: "doctor",
      });
      Appointment.belongsTo(models.User, {
        foreignKey: "users_id",
        as: "users",
      });
      Appointment.belongsTo(models.Treatments, {
        foreignKey: "treatment_id",
        as: "Treatment",
      });
    }
  }
  Appointment.init(
    {
      date: DataTypes.DATE,
      doctor_id: DataTypes.INTEGER,
      users_id: DataTypes.INTEGER,
      description: DataTypes.STRING,
      treatment_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Appointment",
    }
  );
  return Appointment;
};










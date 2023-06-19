"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Treatments extends Model {
    static associate(models) {
      Treatments.hasMany(models.Appointment,{
        foreignKey: "treatment_id",
        as: "Treatments"
      })
    }
  }
  Treatments.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Treatments",
    }
  );
  return Treatments;
};

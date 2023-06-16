"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Treatments extends Model {
    static associate(models) {}
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

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointments.belongsTo(models.Users, {
        foreignKey: "user_id",
        // onDelete: 'CASCADE'
      });
      
      Appointments.belongsTo(models.Services, {
        foreignKey: "service_id",
        // onDelete: 'CASCADE'
      });
      
    }
  }
  Appointments.init(
    {
      date: DataTypes.STRING,
      comments: DataTypes.STRING,
      user_id: DataTypes.STRING,
      service_id: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Appointments",
    }
  );
  return Appointments;
};

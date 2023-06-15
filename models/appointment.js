'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointment.belongsTo(models.User, {
        foreignKey: 'doctor_id',
        as: 'doctor'
      });
      Appointment.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
      Appointment.belongsTo(models.Treatments, {
        foreignKey: 'treatments_id',
        as: "treatments"
      })
    }
  }
  Appointment.init({
    date: DataTypes.DATE,
    doctor_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    treatment_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};
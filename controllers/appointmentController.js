const { Appointment } = require("../models/appointment");
const appointmentController = {};


// Crear citas
appointmentController.createAppointment = async (req, res) => {
    try {
      const { date, doctor_id, user_id, treatments_id } = req.body;
  
      const { role_id, userId } = req;
  
      if (role_id === 3 && user_id !== userId) {
        return res.json({
          success: false,
          message: "Solo puedes crear tus propias citas",
        });
      }
  
      if (role_id === 2 && !user_id) {
        return res.json({
          success: false,
          message: "Debes identificarte como paciente",
        });
      }
  
      const newAppointment = await Appointment.create({
        date,
        doctor_id,
        user_id,
        description,
        treatments_id,
      });
  
      return res.json({
        success: true,
        message: "Appointment created",
        data: newAppointment,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Appointment cannot be created",
        error: error,
      });
    }
  };
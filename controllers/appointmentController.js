const { Appointment, Treatments } = require("../models/");

const appointmentController = {};

// Crear citas
appointmentController.createAppointment = async (req, res) => {
  try {
    const { date, doctor_id, treatment_id } = req.body;
    const { userId: users_id} = req;

    const { roleId, userId } = req;

    console.log (userId, users_id)

    if (roleId === 3 && users_id != userId) {
      return res.json({
        success: false,
        message: "Solo puedes crear tus propias citas",
      });
    }

    if (roleId === 2 && !users_id) {
      return res.json({
        success: false,
        message: "Debes identificarte como paciente",
      });
    }

    const newAppointment = await Appointment.create({
      date: date,
      doctor_id: doctor_id,
      users_id: userId,
      treatment_id: treatment_id,
    });

    return res.json({
      success: true,
      message: "Cita creada",
      data: newAppointment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se pudo crear la cita",
      error: error,
    });
  }
};

// Obtener tus citas como usuario
appointmentController.getAllAppointments = async (req, res) => {
  try {
    const { userId } = req;

    const allAppointments = await Appointment.findAll({
      where: {
        users_id: userId,
      },
      include: [
        {
        model: Treatments,
        as: "Treatment",
        attributes: {
          exclude: [
            "createdAt", "updatedAt"
          ]
        }

        }
      ]

    });

    return res.json({
      success: true,
      message: "Citas encontradas",
      data: allAppointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se encontraron citas",
      error: error.message,
    });
  }
};

// Modificar tus citas
appointmentController.updateAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id;

    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment) {
      return res.json({
        success: true,
        message: "El id de la cita no existe",
      });
    }
    const { date, treatment_id, doctor_id } = req.body;

    const appointmentUpdate = await Appointment.update(
      {
        date: date, //'2023-06-07T14:30:00' <= formato fecha
        treatment_id: treatment_id,
        doctor_id: doctor_id,
      },
      {
        where: {
          id: appointmentId,
        },
      }
    );

    return res.json({
      success: true,
      message: "Appointment updated",
      data: appointmentUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se pudo actualizar la cita",
      error: error,
    });
  }
};

// Eliminar citas
appointmentController.deleteAppointment = async (req, res) => {
  try {
    const appointmentId = req.params.id

    const deleteAppointment = await Appointment.destroy({
      where: {
        id: appointmentId,
      },
    });
    return res.json({
      success: true,
      message: "Cita eliminada",
      data: deleteAppointment,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "La cita no pudo ser eliminada",
      error: error,
    });
  }
};

// Ver todas las citas como Doctor
appointmentController.getAllAppointmentsDoctor = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({});

    return res.json({
      success: true,
      message: "Econtradas citas pendiente",
      data: appointments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se econtraron citas pendientes",
      error: error,
    });
  }
};
module.exports = appointmentController;
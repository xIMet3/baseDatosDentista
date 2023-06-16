const { Appointment } = require("../models/");
const treatments = require("../models/treatments");
const user = require("../models/user");
const appointmentController = {};


// Crear citas
appointmentController.createAppointment = async (req, res) => {
    try {
      const { date, doctor_id, users_id, treatment_id } = req.body;
  
      const { role_id, userId } = req;
  
      if (role_id === 3 && users_id !== userId) {
        return res.json({
          success: false,
          message: "Solo puedes crear tus propias citas",
        });
      }
  
      if (role_id === 2 && !users_id) {
        return res.json({
          success: false,
          message: "Debes identificarte como paciente",
        });
      }
  
      const newAppointment = await Appointment.create({
        date: date,
        doctor_id: doctor_id,
        users_id: userId,
        treatment_id: treatment_id
      });
  
      return res.json({
        success: true,
        message: "Cita creada",
        data: newAppointment,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "No se pudo modificar la cita",
        error: error,
      });
    }
  };

  // Obtener tus citas como usuario
  appointmentController.getAllAppointments = async (req, res) => {
    try {
      const { userId } = req;
  
      const allAppointments = await Appointment.findAll(
        {
          where: {
            users_id: userId,
          },
       }
      );
  
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
      console.log(appointmentId);
  
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
      const appointmentId = req.params.id;
  
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
  appointmentController.getAllAppointmentsDoctor =  async(req, res) => {
    try {
        const appointments = await Appointment.findAll({

        }
        );
       
        return res.json({
            success: true,
            message: "Econtradas citas pendiente",
            data: appointments
        })
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "No se econtraron citas pendientes",
                error: error
            }
        )    
    }
}
module.exports = appointmentController


























//   appointmentController.getAllAppointmentsDoctor =  async(req, res) => {
//     try {
//         const appointments = await Appointment.findAll({
            
//             attributes: ["date"],
//             include: [
//                 {
//                 model: user,
//                 as: "user",
//                 attributes: ["name", "email"]
//                 },
//                 {
//                 model: treatments,
//                 as: "treatments",
//                 attributes: ["treatments", "description"]
//             },
//             {
//                 model: user,
//                 as: "doctor",
//                 attributes: ["name", "email"]
//             }
//         ]
//         });

//         return res.json({
//             success: true,
//             message: "Citas pendientes recuperadas",
//             data: appointments
//         })
//     } catch (error) {
//         return res.status(500).json({
//                 success: false,
//                 message: "No se encontraron citas pendientes",
//                 error: error.message
//             })    
//     }
// }




  
  
  // appointmentController.getAppointment = async (req, res) => {
  //   try {
  //     const pendingAppointments = await Appointment.findAll({
      
  //       attributes: ["users_id", "date", "treatment_id", "description"],
  //     });
    
  //     return res.status(200).json({
  //       message: ("Tus citas pendientes: " + pendingAppointments)
  //     });

  //   }catch (error) {
  //       return res.status(500).json({
  //         success: false,
  //         message: "La cita no pudo ser eliminada",
  //         error: error,
  //       });
  //   }
  // };






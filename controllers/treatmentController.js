const { Treatments } = require("../models");
//const Treatments = require ('../models/treatments');
const treatmentsController = {};

// Funcion para crear un nuevo tratamiento
treatmentsController.createTreatment = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const newTreatment = await Treatments.create({
      name: name,
      description: description,
      price: price,
    });

    return res.json({
      succes: true,
      message: "Tratamiento creado",
      data: newTreatment,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "No se puede crear el tratamiento",
      error: error.message,
    });
  }
};

treatmentsController.getAllTreatments = async (req, res) => {
  try {
    const { userId } = req;

    const allTreatments = await Treatments.findAll({});

    return res.json({
      succes: true,
      mesaage: "Aqui tienes todos los tratamientos actuales",
      data: allTreatments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se encontraron tratamientos actualmente",
      error: error,
    });
  }
};

treatmentsController.updateTreatment = async (req, res) => {
  try {
    //Obtiene el ID del tratamientodesde los parametros de la solicitud (/id en la url)
    const treatmentId = req.params.id;
    // Busca el tratamiento por la ID en la BD
    const treatment = await Treatments.findByPk(treatmentId);

    if (!treatment) {
      return res.json({
        // Si el tratamiento no existe devuelve que el ID no existe
        succes: true,
        message: "El id del tratamiento no existe",
      });
    }
    // Extrae las nuevas propiedades del body
    const { name, description, price } = req.body;

    // Actualiza el tratamiento en la BD con las nuevas propiedades
    const treatmentUpdate = await Treatments.update(
      {
        name: name,
        description: description,
        price: price,
      },
      {
        where: {
          id:treatmentId,
        },
      }
    );
    console.log()
    return res.json({
      succes: true,
      message: "Tratamiento actualizado",
      // Devuelve los datos actualizados
      data: treatmentUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: "No se pudo actualizar el tratamiento",
      error: error,
    });
  }
};

treatmentsController.deleteTreatment = async (req, res) => {
  try{
    const treatmentId = req.params.id
    
    const deleteTreatment = await Treatments.destroy({
      where: {
        id: treatmentId,
      },
    });
    return res.json ({
      succes: true,
      message: "Tratamiento eliminado",
      data: deleteTreatment,
    });
  }catch (error){
    return res.status(500).json({
      succes: false,
      message: "El tratamiento no pudo ser eliminado",
      error: error,
    });
  }
}
module.exports = treatmentsController;
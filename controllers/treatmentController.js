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
    const {userId} = req;

    const allTreatments = await Treatments.findAll({});

    return res.json({
      succes: true,
      mesaage: "Aqui tienes todos los tratamientos actuales",
      data: allTreatments,
    });
  }catch (error) {
    return res.status(500).json({
      success: false,
      message: "No se encontraron tratamientos actualmente",
      error: error,
    });
};
}










module.exports = treatmentsController;

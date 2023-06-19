const { Treatments } = require("../models");
//const Treatments = require ('../models/treatments');
const treatmentsController = {};

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









module.exports = treatmentsController;

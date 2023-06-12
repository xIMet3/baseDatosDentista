const appointmentsController = {};

appointmentsController.getAppointments = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Get All Appointments"
        }
    )
}

appointmentsController.postAppointments = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Create Appointments"
        }
    )
}

appointmentsController.putAppointments = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Update Appointments " + req.params.id
        }
    )
}


appointmentsController.deleteAppointments = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Delete Appointments " + req.params.id
        }
    )
}



module.exports = appointmentsController;
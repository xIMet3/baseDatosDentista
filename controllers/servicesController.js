const servicesController = {};

servicesController.getServices = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Get All Services"
        }
    )
};

servicesController.postServices = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Create Services"
        }
    )
};

servicesController.putServices = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Update Services"
        }
    )
};

servicesController.deleteServices = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Delete Services"
        }
    )
};



module.exports = servicesController;
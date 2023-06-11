const roleController = {};

roleController.getRole = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Get All Roles"
        }
    )
};

roleController.postRole = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Create roles"
        }
    )
};

roleController.putRole = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Update Roles"
        }
    )
};

roleController.deleteRole = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Delete Roles"
        }
    )
};













module.exports = roleController;
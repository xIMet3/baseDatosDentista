const usersController = {};

usersController.getUsers = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Get All Users"
        }
    )
};

usersController.postUsers = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Create Users"
        }
    )
};

usersController.putUsers = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Update Users"
        }
    )
};

usersController.deleteUsers = (req, res) => {
    return res.json(
        {
            succes: true,
            message: "Delete Users"
        }
    )
};















module.exports = usersController;
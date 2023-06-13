const bcrypt = require('bcrypt');
const { User } = require("../models");

const MIN_PASSWORD_LENGTH = 6;
const usersController = {};

usersController.getUsers = (req, res) => {
    return res.json({
        success: true,
        message: "Get All Users"
    });
};


usersController.putUsers = (req, res) => {
    return res.json({
        success: true,
        message: "Update Users"
    });
};

usersController.deleteUsers = (req, res) => {
    return res.json({
        success: true,
        message: "Delete Users"
    });
};

usersController.registerUser = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (password.length < MIN_PASSWORD_LENGTH) {
        return res.status(400).json({
            error: 'Password must be longer than 6 characters',
        });
    }

    try {
        const newPassword = bcrypt.hashSync(password, 6);

        const newUser = await User.create({
            name: name,
            email: email,
            password: newPassword,
            role_id: 1
        });

        return res.status(201).json({
            message: 'User created successfully',
            user: newUser,
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong creating users',
            error: error.message,
        });
    }
}


module.exports = usersController;

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
    const role_id = req.body.role_id;

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

usersController.loginUser = async (req, res) => {
    const password = req.body.password;
    const email = req.body.email;


    try {
        const user = await User.findOne({ email });


        if (!user) {
            return res.status(401).json({
                error: 'Invalid email or password',
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                error: 'Invalid email or password',
            });
        }

        return res.status(200).json({
            message: 'Login successful',
            user,
        });
    
    }catch (error) {
        return res.status(500).json({
            message: 'Something went wrong during login',
            error: error.message,
        });
    }
}

    module.exports = usersController

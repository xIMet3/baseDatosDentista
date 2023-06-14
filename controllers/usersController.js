const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const MIN_PASSWORD_LENGTH = 6;

const usersController = {};

// Registrar un nuevo usuario
usersController.registerUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  if (password.length < MIN_PASSWORD_LENGTH) {
    return res.status(400).json({
      error: "La contraseña debe tener al menos 6 caracteres",
    });
  }

  try {
    const newPassword = bcrypt.hashSync(password, 6);

    const newUser = await User.create({
      name: name,
      email: email,
      password: newPassword,
      role_id: 3,
    });

    return res.status(201).json({
      message: "Usuario creado exitosamente",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrió un error al crear el usuario",
      error: error.message,
    });
  }
};

// Iniciar sesión de un usuario
usersController.loginUser = async (req, res) => {
  const password = req.body.password;
  const email = req.body.email;

  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(401).json({
        error: "Correo electrónico o contraseña no válidos1",
      });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Correo electrónico o contraseña no válidos2",
      });
    }

    // Generar un token de autenticacion utilizando JWT
    const token = jwt.sign(
      {
        userId: user.id,
        roleId: user.role_id,
        email: user.email,
      },
      "secreto",
      {
        expiresIn: "2h",
      }
    );

    return res.status(200).json({
      message: "Inicio de sesión exitoso",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Ocurrió un error durante el inicio de sesión",
      error: error.message,
    });
  }
};

usersController.getProfile = async (req, res) => {
  try {
    // Obtener el ID del usuario actual desde la solicitud
    const userId = req.userId;

    // Buscar el usuario en la base de datos por ID
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
        error: error,
      });
    }

    // Enviar la información del perfil del usuario como respuesta
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener el perfil del usuario",
      error: error,
    });
  }
};

module.exports = usersController;

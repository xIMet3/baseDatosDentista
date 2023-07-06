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
  const telephoneNumber = req.body.telephoneNumber;

  if (telephoneNumber.length != 9) {
    return res.status(400).json({
      error: "El número de teléfono debe tener exactamente 9 dígitos",
    });
  }


  // Encripta la contraseña
  try {
    const newPassword = bcrypt.hashSync(password, 6);

    const newUser = await User.create({
      name: name,
      email: email,
      password: newPassword,
      telephoneNumber: telephoneNumber,
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
    // Compara la contraseña introducida con la contraseña del usuario al que quiere acceder
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Correo electronico o contraseña no validos",
      });
    }

    // Generar un token de autenticacion JWT
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
// Buscar un perfil
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

    // Enviar el perfil del usuario como respuesta
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
// Buscar todos los perfiles de usuarios
usersController.getAllProfiles = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        role_id: [2, 3]
      },
    });

    return res.json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Users not found",
      error: error,
    });
  }
};

// Actualizar perfiles
usersController.updateProfile = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);

    const user = await User.findByPk(userId);

    if (!user) {
      return res.json({
        success: true,
        message: "El usuario no existe",
      });
    }
    // Parametros que se pueden actualizar/modificar
    const { name, telephoneNumber, email } = req.body;
    // Recibe el perfil actualizado como respuesta
    const profileUpdated = await user.update(
      {
        name: name,
        telephoneNumber: telephoneNumber,
        email: email,
      },
      {
        where: {
          id: userId,
        },
      }
    );

    return res.json({
      success: true,
      message: "Perfil actualizado",
      data: profileUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "El usuario no puede ser actualizado",
      error: error,
    });
  }
};
module.exports = usersController;
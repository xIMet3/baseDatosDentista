const auth = (req, res, next) => {
  try {
    const jwt = require("jsonwebtoken");

    // Obtener el token
    const bearerToken = req.headers.authorization;
    // Verifica si no se proporciona un token
    if (!bearerToken) {
      return res.json({
        success: true,
        message: "No tienes permisos necesarios",
      });
    }
    // Extraer el token de autorizacion
    const token = bearerToken.split(" ")[1];
    // Verificar y decodificar el token utilizando jwt
    const decoded = jwt.verify(token, "secreto");
    // Almacenar los datos del usuario extraidos del token
    req.userId = decoded.userId;
    req.roleId = decoded.roleId;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
      error: error,
    });
  }
};

module.exports = auth;

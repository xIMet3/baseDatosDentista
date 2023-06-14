const isAdmin = async (req, res, next) => {
    try {
      if (req.roleId === 1 || req.roleId === 2) {
        next();
      } else {
        return res.json({
          success: true,
          message: "No tienes los permisos necesarios",
        });
      }    
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Algo salio mal",
        error: error.message,
      });
    }
  };
  
  module.exports = isAdmin;
  
const isDoctor = async (req, res, next) => {
  try {
    const roleId = req.roleId;
    if (req.roleId !== 2) {
      return res.json({
        success: true,
        message: "Something went wrong",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

module.exports = isDoctor;

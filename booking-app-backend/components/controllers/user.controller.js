const { getUsersService } = require("../services/user.service");

const getUsers = async (req, res, next) => {
  try {
    const users = await getUsersService();
    res.status(200).json({
      status: "success",
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No users found",
      error: error.message,
    });
  }
};

module.exports = {
  getUsers,
};

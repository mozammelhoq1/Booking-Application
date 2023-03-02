const { getUniqueUsersService } = require("../services/uniqueUser.service");

const getUniqueUsers = async (req, res, next) => {
  try {
    const uniqueUsers = await getUniqueUsersService();
    res.status(200).json({
      status: "success",
      results: uniqueUsers.length,
      data: {
        uniqueUsers,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No unique users found",
      error: error.message,
    });
  }
};

module.exports = {
  getUniqueUsers,
};

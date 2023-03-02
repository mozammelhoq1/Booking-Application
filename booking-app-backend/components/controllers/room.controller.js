const { getRoomsService } = require("../services/room.service");

const getRooms = async (req, res, next) => {
  try {
    const rooms = await getRoomsService();
    res.status(200).json({
      status: "success",
      results: rooms.length,
      data: {
        rooms,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No rooms found",
      error: error.message,
    });
  }
};

module.exports = {
  getRooms,
};

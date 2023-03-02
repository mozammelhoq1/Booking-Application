const express = require("express");
const router = express.Router();

// const {
//   getRooms,
//   getRoom,
//   createRoom,
//   updateRoom,
//   deleteRoom,
// } = require("../controllers/room.controller");

const roomController = require("../controllers/room.controller");
router.route("/").get(roomController.getRooms);

// router.route("/").get(roomController.getRooms).post(roomController.createRoom);

// router
//   .route("/:id")
//   .get(roomController.getRoom)
//   .patch(roomController.updateRoom)
//   .delete(roomController.deleteRoom);

module.exports = router;

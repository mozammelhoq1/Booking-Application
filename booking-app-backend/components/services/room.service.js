const Room = require("../models/room.model");

exports.getRoomsService = async () => {
  const rooms = await Room.find({});
  return rooms;
};

/***
in future, we will have:

1. get one room
2. create one room
3. update one room
4. delete one room

 ***/

const mongoose = require("mongoose");

const uniqueUserSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      unique: true,
    },
    room_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      unique: true,
    },
    item_id: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "Item",
      unique: true,
    },

    checking_in: {
      type: Date,
      default: Date.now(),
    },
    checking_out: {
      type: Date,
      default: Date.now(),
    },
    total_spent: {
      type: Number,
      default: 0,
    },
  },
  {
    timeStamps: true,
  }
);

const UniqueUser = mongoose.model("UniqueUser", uniqueUserSchema);

module.exports = UniqueUser;

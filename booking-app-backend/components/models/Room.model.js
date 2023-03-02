const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    room_name: {
      type: String,
      required: [true, "Please provide a room name"],
      unique: true,
      trim: true,
      maxLength: [40, "A room name must have less or equal then 40 characters"],
      minlength: [10, "A room name must have more or equal then 10 characters"],
    },
    room_capacity: {
      type: Number,
      required: [true, "Please provide a room capacity"],
      min: [0, "Capacity cannot be negative"],
      validate: {
        validator: (value) => {
          const integer = Number.isInteger(value);
          if (integer) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    room_basic_price: {
      type: Number,
      required: [true, "Please provide a room basic price"],
      min: [0, "Price cannot be negative"],
    },
    room_image: {
      type: String,
      required: [true, "Please provide an image"],
    },
    room_size: {
      type: Number,
      required: [true, "Please provide a room size"],
      min: [0, "Size cannot be negative"],
    },
    room_policy: {
      type: String,
      required: [true, "Please provide a room policy"],
      maxLength: [
        1000,
        "A room policy must have less or equal then 1000 characters",
      ],
      minlength: [
        20,
        "A room policy must have more or equal then 20 characters",
      ],
    },
    room_type: {
      type: String,
      required: [true, "Please provide a room type"],
      enum: {
        values: ["single", "double", "family"],
        message: "Room type is either: single, double or family",
      },
    },
    room_stocks: {
      type: Number,
      required: [true, "Please provide a room stock"],
      min: [0, "Stock cannot be negative"],
      validate: {
        validator: (value) => {
          const integer = Number.isInteger(value);
          if (integer) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    room_discount: {
      type: Number,
      required: [true, "Please provide a room discount"],
      min: [0, "Discount cannot be negative"],
      validate: {
        validator: (value) => {
          const integer = Number.isInteger(value);
          if (integer) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    room_furniture: {
      type: String,
      required: [true, "Please provide a room furniture"],
      maxLength: [
        1000,
        "A room furniture must have less or equal then 1000 characters",
      ],
      minlength: [
        20,
        "A room furniture must have more or equal then 20 characters",
      ],
    },
    room_washroom: {
      type: Number,
      required: [true, "Please provide a room washroom"],
      min: [0, "Washroom cannot be negative"],
      validate: {
        validator: (value) => {
          const integer = Number.isInteger(value);
          if (integer) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    room_belcony: {
      type: Number,
      required: [true, "Please provide a room belcony"],
      min: [0, "Belcony cannot be negative"],
      validate: {
        validator: (value) => {
          const integer = Number.isInteger(value);
          if (integer) {
            return true;
          } else {
            return false;
          }
        },
      },
    },
    room_plan: [
      {
        plan_name: {
          type: String,
          required: [true, "Please provide a plan name"],
          unique: true,
          enum: {
            values: ["basic", "premium", "vip"],
            message: "Plan name is either: basic, premium or vip",
          },
        },
        plan_price: {
          type: Number,
          required: [true, "Please provide a plan price"],
          min: [0, "Price cannot be negative"],
        },
        plan_item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Item",
          unique: true,
        },
      },
    ],
  },
  {
    timeStamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;

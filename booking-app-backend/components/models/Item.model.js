const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    item_name: {
      type: String,
      required: [true, "Please provide a name"],
      unique: true,
      trim: true,
      maxLength: [
        40,
        "A service name must have less or equal then 40 characters",
      ],
      minlength: [
        10,
        "A service name must have more or equal then 10 characters",
      ],
    },
    item_status: {
      type: String,
      required: [true, "Please provide a status"],
      enum: {
        values: ["available", "not-available"],
        message: "Status is either: available or not-available",
      },
    },
    item_price: {
      type: Number,
      required: [true, "Please provide a price"],
      min: [0, "Price cannot be negative"],
    },
    item_image: {
      type: String,
      required: [true, "Please provide an image"],
    },
    item_description: {
      type: String,
      required: [true, "Please provide a description"],
      maxLength: [
        200,
        "A service description must have less or equal then 200 characters",
      ],
      minlength: [
        20,
        "A service description must have more or equal then 20 characters",
      ],
    },
    item_quantity: {
      type: Number,
      required: [true, "Please provide a quantity"],
      min: [0, "Quantity cannot be negative"],
      validate: {
        validator: (value) => {
          const integer = Number.isInteger(value);
          if (integer) {
            return true;
          } else {
            return false;
          }
        },
        message: "Quantity must be an integer value",
      },
    },
    //   service_created_at: {
    //     type: Date,
    //     default: Date.now(),
    //     },
    //     service_updated_at: {
    //     type: Date,
    //     default: Date.now(),
    //     },
  },
  {
    // option to add createdAt and updatedAt
    timestamps: true,
  }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

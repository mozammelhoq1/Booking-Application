const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    user_name: {
      type: String,
      required: [true, "Please provide a name"],
      unique: true,
      trim: true,
      maxLength: [40, "A user name must have less or equal then 40 characters"],
      minlength: [10, "A user name must have more or equal then 10 characters"],
    },
    user_email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      trim: true,
      // email validation
      validate: {
        validator: (value) => {
          const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
          return emailRegex.test(value);
        },
      },
    },
    user_password: {
      type: String,
      required: [true, "Please provide a password"],
      trim: true,
      maxLength: [
        120,
        "A user password must have less or equal then 120 characters",
      ],
      minlength: [
        6,
        "A user password must have more or equal then 6 characters",
      ],
      // password validation (at least one number, one lowercase and one uppercase letter)
      validate: {
        validator: (value) => {
          const passwordRegex =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
          return passwordRegex.test(value);
        },
      },
    },
    user_role: {
      type: String,
      required: [true, "Please provide a role"],
      enum: {
        values: ["admin", "user"],
        message: "Role is either: admin or user",
      },
    },
    user_status: {
      type: String,
      required: [true, "Please provide a status"],
      enum: {
        values: ["active", "inactive"],
        message: "Status is either: active or inactive",
      },
    },
    user_image: {
      type: String,
      required: [true, "Please provide an image"],
    },
    user_phone: {
      type: String,
      required: [true, "Please provide a phone number"],
      trim: true,
      // phone number validation for all countries (https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript)
      validate: {
        validator: (value) => {
          const phoneRegex = /^(\+?0?86\-?)?1[345789]\d{9}$/;
          return phoneRegex.test(value);
        },
      },
    },
    user_address: [
      {
        country: {
          type: String,
          required: [true, "Please provide a country"],
          trim: true,
          maxLength: [
            40,
            "A country name must have less or equal then 40 characters",
          ],
          minlength: [
            2,
            "A country name must have more or equal then 2 characters",
          ],
        },
        city: {
          type: String,
          required: [true, "Please provide a city"],
          trim: true,
          maxLength: [
            40,
            "A city name must have less or equal then 40 characters",
          ],
          minlength: [
            2,
            "A city name must have more or equal then 2 characters",
          ],
        },
        postal_code: {
          type: String,
          required: [true, "Please provide a postal code"],
          trim: true,
          maxLength: [
            10,
            "A postal code must have less or equal then 10 characters",
          ],
          minlength: [
            2,
            "A postal code must have more or equal then 2 characters",
          ],
        },
        area: {
          type: String,
          required: [true, "Please provide an area"],
          trim: true,
          maxLength: [
            40,
            "An area name must have less or equal then 40 characters",
          ],
          minlength: [
            2,
            "An area name must have more or equal then 2 characters",
          ],
        },
        street: {
          type: String,
          required: [true, "Please provide a street"],
          trim: true,
          maxLength: [
            40,
            "A street name must have less or equal then 40 characters",
          ],
          minlength: [
            2,
            "A street name must have more or equal then 2 characters",
          ],
        },
        house_no: {
          type: Number,
          required: [true, "Please provide a house number"],
          trim: true,
          min: [1, "A house number must be greater than 0"],
          max: [9999, "A house number must be less than 9999"],
          validate: {
            validator: Number.isInteger,
            message: "{VALUE} is not an integer value",
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

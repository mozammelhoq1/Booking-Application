const User = require("../models/User.model");

exports.getUsersService = async () => {
  const users = await User.find({});
  return users;
};

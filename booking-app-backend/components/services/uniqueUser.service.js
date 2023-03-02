const UniqueUser = require("../models/UniqueUser.model");

exports.getUniqueUsersService = async () => {
  const uniqueUsers = await UniqueUser.find({});
  return uniqueUsers;
};

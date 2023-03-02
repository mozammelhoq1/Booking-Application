const Item = require("../models/Item.model");

exports.getItemsService = async () => {
  const items = await Item.find({});
  return items;
};

const { getItemsService } = require("../services/item.service");

const getItems = async (req, res) => {
  try {
    const items = await getItemsService();
    res.status(200).json({
      status: "success",
      results: items.length,
      data: {
        items,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "No services found",
      error: error.message,
    });
  }
};

module.exports = {
  getItems,
};

const express = require("express");
const { getUniqueUsers } = require("../controllers/UniqueUser.controller");

const router = express.Router();

router.route("/").get(getUniqueUsers);

module.exports = router;

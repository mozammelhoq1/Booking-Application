const express = require("express");
const app = express();
const cors = require("cors");

// import routes
const roomRoute = require("./components/routes/room.route");
const itemRoute = require("./components/routes/item.route");

// middleWares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    Title: "Booking App",
    Message: "API for booking app",
  });
});

// setup route
app.use("/api/v1/rooms", roomRoute);
app.use("/api/v1/items", itemRoute);

module.exports = app;

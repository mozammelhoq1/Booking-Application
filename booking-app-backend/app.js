const express = require("express");
const app = express();
const cors = require("cors");

// import routes
const roomRoute = require("./components/routes/room.route");
const itemRoute = require("./components/routes/item.route");
const userRoute = require("./components/routes/user.route");
const uniqueUserRoute = require("./components/routes/uniqueUser.route");

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
app.use("/api/v1/users", userRoute);
app.use("/api/v1/unique-users", uniqueUserRoute);

// setup all routes in one line with api versioning and prefix
// app.use("/api/v1", roomRoute, itemRoute, userRoute, uniqueUserRoute);

module.exports = app;

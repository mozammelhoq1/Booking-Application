const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");
mongoose.set("strictQuery", false);

// db connect
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("DB connection successful!".green);
});

// server
const port = process.env.PORT || 8080;

// db listening
app.listen(port, () => {
  console.log(`App running on port ${port}...`.yellow.bold.underline);
});

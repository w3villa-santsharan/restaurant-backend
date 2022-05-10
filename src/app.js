const express = require("express");
require("dotenv").config();

const app = express();

app.use("/api/restaurant", require("./routes/restaurant.routes"));

module.exports = app;

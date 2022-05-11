const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));
app.use("/api/restaurant", require("./routes/restaurant.routes"));

module.exports = app;

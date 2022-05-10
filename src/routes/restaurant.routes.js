const express = require("express");
const router = express.Router();
const RestaurantController = require("../controller/restuarant.controller")

// @route  GET api/restaurant/name
// @desc   get all queries
// @access public

router.get("/name", RestaurantController.getRestaurantByName);

// @route  GET api/restaurant/time
// @desc   get all queries
// @access public

router.get("/time", RestaurantController.getRestaurantByTime);



module.exports = router;

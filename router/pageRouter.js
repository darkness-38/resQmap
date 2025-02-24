const express = require("express");
const { enterLocationForm, showLocation, about, homePage } = require("../controller/pageController");

const pageRoute = express.Router()

pageRoute.get("/location", enterLocationForm)
pageRoute.get("/show-locations", showLocation)
pageRoute.get("/about", about)
pageRoute.get("/home", homePage)

module.exports = pageRoute;
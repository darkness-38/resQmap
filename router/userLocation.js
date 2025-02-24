const express = require("express");
const userLocationRoute = express.Router()
const { userLocationSave, locationList } = require("../controller/userController.js")

userLocationRoute.post("/save-location", userLocationSave)
userLocationRoute.get("/get-locations", locationList)

module.exports = userLocationRoute


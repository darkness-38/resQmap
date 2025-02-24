const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")
const pageRoute = require("./router/pageRouter.js")
const locationRoute = require("./router/userLocation.js")

const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))
dotenv.config()
app.set('view engine', 'ejs')

app.use("/", pageRoute)
app.use("/", locationRoute)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongoose is running")
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}/home`)
})
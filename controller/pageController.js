const enterLocationForm = async (req, res) => {
    res.render("saveMap.ejs")
}
const showLocation = async (req, res) => {
    res.render("showLocations.ejs")
}
const about = async (req, res) => {
    res.render("about.ejs")
}
const homePage = async (req, res) => {
    res.render("home.ejs")
}
module.exports = { enterLocationForm, showLocation, about, homePage }
const mongoose = require("mongoose")


const LocationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    tc: {
        type: String,
        unique: true
    },
    info: String,
    timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Location', LocationSchema);


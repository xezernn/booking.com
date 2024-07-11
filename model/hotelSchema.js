const mongoose = require("mongoose")

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("HotelSchema", hotelSchema)
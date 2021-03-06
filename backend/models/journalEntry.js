const mongoose = require("mongoose")
const Schema = mongoose.Schema

const journalSchema = new Schema({
    location: String,
    city: String,
    country: String,
    rating: Number,
    review: String,
    visitDate: Date,
    pictureUrl: String
})

module.exports = mongoose.model('Journal', journalSchema );
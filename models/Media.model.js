const mongoose = require("mongoose");

const mediaSchema = mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    password:String
})

const MediaModel = mongoose.model("media",mediaSchema)

module.exports = {
    MediaModel
}
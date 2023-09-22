const mongoose = require('mongoose')

var studentmodel = mongoose.model("Students_Record", new mongoose.Schema({
    "fullname":String,
    "username":String,
    "email":String,
    "phone":String,
    "gender":String,
}))

module.exports = studentmodel
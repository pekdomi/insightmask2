const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({
    companyName: String,
    emailAddress: String,
    message: String
})

module.exports = mongoose.model('Message', MessageSchema)
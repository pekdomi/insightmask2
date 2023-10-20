const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({
    companyName: String,
    emailAddress: String,
    message: String
})

function createMessageModel(collectionName) {
    return mongoose.model(collectionName, MessageSchema, collectionName);
  }

  
module.exports = createMessageModel
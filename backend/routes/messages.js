const express = require("express");
const router = express.Router();
const createMessageModel = require('../models/messages');


//models
/*
const mongoose = require("mongoose");
const MessageSchema = new mongoose.Schema({
    companyName: String,
    emailAddress: String,
    message: String
})
function createMessageModel(collectionName) {
    return mongoose.model(collectionName, MessageSchema, collectionName);
}
*/

Message_model = createMessageModel("messages")
//models



// get all messages
router.get('/', async (req, res) => {
    const messages = await Message_model.find();
    res.json(messages)
})

// create new message
router.post('/newmsg', async (req, res) => {

    const Message_model_with_collection_name = createMessageModel(req.body.companyName)
    //console.log("\nfrom routes/messages.js: " + Message_model_with_collection_name)
    const newMessage = new Message_model_with_collection_name(
        
        req.body   // what the Vue App is sending
        // {
        //     companyName: "asd",
        //     emailAddress: "email_address",
        //     message: "message_message"
        // }

    );
    const savedMessage = await newMessage.save()
    res.json(savedMessage) 
    //
    // Q: ITT EZ MICSODA
    //
})




// get msg by id
router.get('/get/:id', async (req, res) => {
    const messagebyid = await Message_model.findById({ _id : req.params.id })
    res.json(messagebyid)
})

// delete a msg by id
router.delete('/delete/:id', async (req, res) => {
    const messagebyid = await Message_model.findByIdAndDelete({ _id : req.params.id })
    res.json(messagebyid)
})

// delete a msg by id
router.delete('/delete/:id', async (req, res) => {
    const messagebyid = await Message_model.findByIdAndDelete({ _id : req.params.id })
    res.json(messagebyid)
})

module.exports = router 
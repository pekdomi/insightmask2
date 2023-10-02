const express = require("express");
const router = express.Router();
const Message_model = require('../models/messages');

// get all messages
router.get('/', async (req, res) => {
    const messages = await Message_model.find();
    res.json(messages)
})


// create new message
router.post('/new', async (req, res) => {
    const newMessage = new Message_model(
        
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
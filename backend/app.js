

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const cors = require("cors")
// creat our express app
const app = express()

// handle CORS + middleware
app.use(function(req, response, next) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Credentials", "true");
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
})

// database
const uri = "mongodb+srv://zetila:r0PgXFuzEP8EpaN3@insightmask.mhn8tdl.mongodb.net/test4?retryWrites=true&w=majority&appName=AtlasApp"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected")
})
.catch(err => console.log(err))


app.use(bodyParser.json())

// routes
//app.get("/", (res, req) => {res.send("routes home page !")})

// itt lehet tobb ilyet csinalni ha tob route van
//*
const MessagesRoute = require('./routes/messages');
    app.use('/message/', MessagesRoute);
const CompanyRoute = require('./routes/companies');
    app.use('/company/', CompanyRoute);

// start server
app.listen(3000, () => {
    console.log("listening at port 3000")
})

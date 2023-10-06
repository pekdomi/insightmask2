const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");




//models
const CompanySchema = new mongoose.Schema({
    companyName: String,
    emailAddress: String,
    password: String
})


function createCompanyModel(collectionName) {
    return mongoose.model(collectionName, CompanySchema, collectionName);
}

router.get('/', async (req, res) => {
    const messages = await Message_model.find();
    res.json(messages)
})


router.post('/newcompany', async (req, res) => {
    console.log(req.body)
    const Company_model_with_collection_name = createCompanyModel("Companies")
    const newCompany = new Company_model_with_collection_name(
        
        req.body   // what the Vue App is sending
        // {
        //     companyName: "asd",
        //     emailAddress: "email_address",
        //     password: "************"
        // }

    );
    const savedCompany = await newCompany.save()
    res.json(savedCompany) 
    //
    // Q: ITT EZ MICSODA
    //
})


module.exports = router 
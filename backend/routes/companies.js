const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const createMessageModel = require('../models/messages');
const bcrypt = require('bcrypt');


//models
const CompanySchema = new mongoose.Schema({
    companyName: String,
    emailAddress: String,
    password: String
})

function createCompanyModel(collectionName) {
    return mongoose.model(collectionName, CompanySchema, collectionName);
}

const Company_model_with_collection_name_company = createCompanyModel("Companies")

router.get('/getall', async (req, res) => {
  var companies = []
  const companies_0 = await Company_model_with_collection_name_company.find();
  for (let i = 0; i<companies_0.length; i++) {
    newObj = { companyName : companies_0[i].companyName}
    companies[i] = newObj
  }
  res.json(companies)
})

router.get('/:name', async (req, res) => {
    //console.log("\nfrom routes/companies.js: " + req.params.name)
    const messageToFind = createMessageModel(req.params.name)
    const messages = await messageToFind.find();
    res.json(messages)
})

router.post('/login', async (req, res) => {
    try {
      const companyName = req.body.companyName
      const passwordId = req.body.passwordID;
      const company_trying_to_log_in = await Company_model_with_collection_name_company.findOne({ companyName });
      //console.log(company_trying_to_log_in)
      if (!company_trying_to_log_in) {
        return res.status(401).json({ error: 'Authentication failed1' });
      }
      //console.log("id object in mongo: "+(company_trying_to_log_in._id.toString())+"\nid we gave: "+(passwordId))
      const isPasswordIdValid = passwordId == company_trying_to_log_in._id.toString()
      //console.log(isPasswordIdValid)
      if (!isPasswordIdValid) {
        res.status(401).json({ error: 'Authentication failed2' });
        return false
      }
      
      res.status(200).json({ response: 'Authentication Successful' });
      return true
  
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Authentication failed3' });
    }
  });




router.post('/newcompany', async (req, res) => {
    console.log(req.body)
    
    const newCompany = new Company_model_with_collection_name_company(
        
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
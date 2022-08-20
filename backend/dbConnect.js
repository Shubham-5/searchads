const mongoose = require("mongoose");
const data = require("./data.json");
const companies = require("./companies.json");
const adModel = require("./models/adModel");
const adCompany = require("./models/adCompany");
require("dotenv").config();

async function connectToCluster() {
  let connection;
  try {
    connection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });

    console.log("Connecting to MongoDB Atlas cluster...");
    console.log("Success");
    try {
      async function addData() {
        const isExist = await adModel.find({});
        const isCompany = await adCompany.find({});
        console.log(isExist.length);
        if (isExist.length === 0) {
          await adModel.insertMany(data);
          console.log("ads added");
        } else if (isCompany.length === 0) {
          await adCompany.insertMany(companies);
          console.log("companies added");
        }
      }
      addData();
    } catch (e) {
      console.log(e.message);
    }
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
  }
}

module.exports = connectToCluster;

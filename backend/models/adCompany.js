const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({}, { strict: false });
const adCompany = mongoose.model("companies", companySchema);
module.exports = adCompany;

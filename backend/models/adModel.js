const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({}, { strict: false });
const adModel = mongoose.model("Ads", adSchema);
module.exports = adModel;

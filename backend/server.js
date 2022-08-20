const express = require("express");
const ads = require("./routes/adsRoute");
const connectToCluster = require("./dbConnect");
require("dotenv").config();

connectToCluster();
const app = express();
app.use("/api/", ads);

app.listen(process.env.PORT, () =>
  console.log("mongo connected and api start listening...")
);

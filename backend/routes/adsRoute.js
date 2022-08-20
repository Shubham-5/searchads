const express = require("express");
const mongoose = require("mongoose");
const connectToCluster = require("../dbConnect");
const adModel = require("../models/adModel");
const router = express.Router();

router.get("/ads", async (req, res) => {
  try {
    const searchad = req.query.search || "";
    const data = await adModel.find({
      primaryText: { $regex: searchad, $options: "i" },
    });
    res.status(200).json({ data });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "server error" });
  }
});

module.exports = router;

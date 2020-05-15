//! Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema

// Generate Schema
const itemSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  type: {
    type: String
  }
});

// Setting schema to variable
var Item = mongoose.model("item", itemSchema);

// Exporting
module.exports = Item;

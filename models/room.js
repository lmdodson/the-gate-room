//! Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema

// Generate Schema
const roomSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  visited: false,
});

// Setting schema to variable
var Room = mongoose.model("Room", roomSchema);

// Exporting
module.exports = Room;

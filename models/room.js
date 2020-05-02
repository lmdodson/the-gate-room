//! Dependencies
const mongoose = require("mongoose");

// Generate Schema
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true
  },
  state: false,
});
var room = mongoose.model("Room", roomSchema);
module.exports = room;

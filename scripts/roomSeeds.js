// Dependencies
const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();


mongoose.connect(
	process.env.MONGODB_URI ||  "mongodb://localhost:27017/tgr",
	{ useNewUrlParser: true }
);

const roomSeed = [{
  name: "Hallway",
  visited: false
}
];

db.Room.remove({})
	.then(() => db.Room.collection.insertMany(roomSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

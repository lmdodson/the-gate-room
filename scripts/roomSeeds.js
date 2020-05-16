// Dependencies
const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config();



mongoose.connect(
	process.env.MONGODB_URI,
	{ useNewUrlParser: true }
);

const roomSeed = [
	{
  name: "Corridor",
	visited: false,
	power: false
}, {
	name: "FlightDeck",
	visited: false,
	doorCode: "1701",
	power: false
}, {
	name: "ComputerCore",
	visited: false,
	power: false
}, {
	name: "Elevator",
	visited: false,
	power: false
}, {
	name: "LifeSupport",
	visited: false,
	power: false
},{ 
	name: "Cabin",
	visited: false,
	power: false,
	treasure: false
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

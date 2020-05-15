//Importing models
const db = require("../models");

// Defining methods for the RoomsController
module.exports = {
	findAll: function (req, res) {
		db.Room.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	find: function(req, res) {
		db.Room.find({ name: req.params.name })
		.then((dbModel) => res.json(dbModel))
		.catch((err) => res.json(err));
	},
	findById: function (req, res) {
		db.Room.find({ _id: req.params.id })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	create: function (req, res) {
		db.Room.create(req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	update: function (req, res) {
		db.Room.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
	remove: function (req, res) {
		db.Room.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.json(err));
	},
};

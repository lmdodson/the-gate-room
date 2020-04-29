//! Dependencies
const express = require("express");
const { join } = require("path");


const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

//! Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

//! Database connection
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/tgr",
	{ useNewUrlParser: true }
);

//! Server start
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Dependencies
const router = require("express").Router();
const roomsRoutes = require("./roomsRoutes");

// Item routes
router.use("/rooms", roomsRoutes);

//Exporting
module.exports = router;

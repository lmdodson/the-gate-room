// Dependencies
const router = require("express").Router();
const roomsRoutes = require("./rooms");

// Item routes
router.use("/rooms", roomsRoutes);

//Exporting
module.exports = router;

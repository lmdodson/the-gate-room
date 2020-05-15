// Dependencies
const router = require("express").Router();
const roomsRoutes = require("./rooms");
const itemRoutes = require("./items");

// Item routes
router.use("/rooms", roomsRoutes);
router.use("/items", itemRoutes);

//Exporting
module.exports = router;

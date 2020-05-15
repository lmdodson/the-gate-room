// Dependencies
const router = require("express").Router();
const roomsController = require("../../controllers/rooms-controller.js");

// Matches with "/api/rooms"
router.route("/")
.get(roomsController.findAll)
.post(roomsController.create);

// Matches with "/api/rooms/:id"
router.route("/:id")
	.get(roomsController.findById)
	.put(roomsController.update)
	.delete(roomsController.remove);

	// Matches with "/api/rooms/:name"
router.route("/find-room/:name")
	.get(roomsController.find)

// Exporting
module.exports = router;

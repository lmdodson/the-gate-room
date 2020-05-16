// Dependencies
const router = require("express").Router();
const itemsController = require("../../controllers/items-controller.js");

// Matches with "/api/items"
router.route("/")
.get(itemsController.findAll)
.post(itemsController.create);

// Matches with "/api/items/:id"
router.route("/:id")
	.get(itemsController.findById)
	.put(itemsController.update)
	.delete(itemsController.remove);

	// Matches with "/api/items/:name"
router.route("/reveal/:name")
	.get(itemsController.find)

// Exporting
module.exports = router;

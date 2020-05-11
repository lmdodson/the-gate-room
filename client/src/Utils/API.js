import axios from "axios";

export default {
	// Gets all items
	getRooms: function () {
		return axios.get("/api/rooms");
	},
	// Gets the item with the given id
	getRoom: function (id) {
		return axios.get("/api/rooms/" + id);
	},
	updateRoom: function (id, itemData) {
		return axios.put("/api/rooms/" + id, itemData);
	},
	// Deletes the item with the given id
	deleteItems: function (id) {
		return axios.delete("/api/rooms/" + id);
	},
	// Saves an item to the database
	saveItem: function (itemData) {
		return axios.post("/api/rooms", itemData);
	},
};

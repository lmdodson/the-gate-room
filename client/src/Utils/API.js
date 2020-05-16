import axios from "axios";

export default {
	// Gets all Rooms
	getRooms: function () {
		return axios.get("/api/rooms");
	},
	// Gets the item with the given id
	getRoomID: function (id) {
		return axios.get("/api/rooms/" + id);
	},
	// Gets the Room with the given id
	getRoom: function (name) {
		console.log(name)
		return axios.get("/api/rooms/find-room/" + name);
	},
	// Updates the Room with the given id
	updateRoom: function (id, roomData) {
		return axios.put("/api/rooms/" + id, roomData);
	},
	// Deletes the Room with the given id
	deleteRooms: function (id) {
		return axios.delete("/api/rooms/" + id);
	},
	// Saves a Room to the database
	saveRoom: function (roomData) {
		return axios.post("/api/rooms", roomData);
	},
		// Gets all Items
		getItems: function () {
			return axios.get("/api/items/all");
		},
		// Gets the item with the given id
		getItemID: function (id) {
			return axios.get("/api/items/" + id);
		},
		// Gets the Room with the given id
		getItem: function (name) {
			console.log(name)
			return axios.get("/api/items/reveal/" + name);
		},
		// Updates Item with the given id
		updateItem: function (id, itemData) {
			return axios.put("/api/items/" + id, itemData);
		},
		// Deletes the Item with the given id
		deleteItem: function (id) {
			return axios.delete("/api/items/" + id);
		},
		// Saves an Item to the database
		saveItem: function (itemData) {
			return axios.post("/api/items", itemData);
		},
};

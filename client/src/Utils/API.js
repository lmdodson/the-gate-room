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
		return axios.get("/api/rooms/" + name);
	},
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
};

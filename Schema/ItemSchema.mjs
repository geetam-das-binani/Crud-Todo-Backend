import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
	mytext: {
		type: String,
	},
	Date: {
		type: String,
		default: () => new Date().getTime(),
	},
});

export const myplan = mongoose.model("items", ItemSchema);

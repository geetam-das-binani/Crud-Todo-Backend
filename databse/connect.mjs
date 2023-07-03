import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD
const Url =
	`mongodb+srv://${username}:${password}@learnmongo.6pho3we.mongodb.net/`;
export const connect = () => {
	mongoose
		.connect(Url)
		.then(() => console.log("Connected Succesfully"))
		.catch((e) => console.log(e.message));
};

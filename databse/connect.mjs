import mongoose from "mongoose";




export const connect = (username,password) => {
  mongoose
    .connect(`mongodb+srv://${username}:${password}@learnmongo.6pho3we.mongodb.net/`)
    .then(() => console.log("Connected Succesfully"))  
    .catch((e) => console.log(e.message));
};
   
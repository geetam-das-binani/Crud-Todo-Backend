import express from "express";
import cors from "cors";
import router from "./routes/todos.mjs";
import dotenv from "dotenv";
import { connect } from "./databse/connect.mjs";

 
dotenv.config();
const PORT=process.env.PORT || 8001

const app = express();
app.use(cors());


connect(process.env.DB_PASS, process.env.DB_NAME);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.listen(PORT, () => console.log("Server is listening on port 8000"));
 
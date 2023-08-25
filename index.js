import express from "express";
import cors from "cors";
import router from "./routes/todos.mjs";
import dotenv from "dotenv";
import { connect } from "./databse/connect.mjs";
import {dirname,path} from 'path'
import { fileURLToPath } from "url";

dotenv.config();
const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});

connect(process.env.DB_PASS, process.env.DB_NAME);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.listen(8000, () => console.log("Server is listening on port 8000"));

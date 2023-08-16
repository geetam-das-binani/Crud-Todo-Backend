import express from "express";
import cors from "cors";
import router from './routes/todos.mjs'
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.join(__dirname, "./config/config.env") });
import {connect} from './databse/connect.mjs' 
const app = express();
app.use(cors());

connect(process.env.DB_PASS ,process.env.DB_NAME)
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.use('/',router)
app.listen(8000, () => console.log("Server is listening on port 8000"));
  
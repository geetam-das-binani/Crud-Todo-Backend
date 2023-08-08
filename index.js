import express from "express";
import cors from "cors";
import router from './routes/todos.mjs'
import {connect} from './databse/connect.mjs' 
const app = express();
app.use(cors());

connect()
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
app.use('/',router)
app.listen(8000, () => console.log("Server is listening on port 8000"));
  
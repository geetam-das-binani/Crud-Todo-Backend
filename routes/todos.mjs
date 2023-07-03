import express from "express";
const router = express.Router();
import { addItem,getItem ,getEditItem,UpdateEditItem,deleteItem} from "../actions/path.mjs";

router.post('/add',addItem)
router.get('/get',getItem)
router.get('/:id',getEditItem)
router.post('/:id',UpdateEditItem)
router.delete('/:id',deleteItem)

export default router
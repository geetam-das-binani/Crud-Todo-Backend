import { myplan } from "../Schema/ItemSchema.mjs";

export const addItem = async (req, res) => {
	try {
		const item = req.body;
       
		const createPlan = await myplan.create(item);
		res.status(200).json(createPlan);
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};
export const getItem = async (req, res) => {
	try {
		
       
		const getData = await myplan.find()
		res.status(200).json(getData);
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};
export const getEditItem = async (req, res) => {
	try {
		
       
		const getEditData = await myplan.findOne({_id:req.params.id})
		
		res.status(200).json(getEditData);
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};
export const UpdateEditItem = async (req, res) => {
	try {
		
       
		const getEditData = await myplan.findOne({_id:req.params.id})
		
		getEditData.mytext=req.body.mytext
		await getEditData.save()
		
		res.status(200).json(getEditData);
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};export const deleteItem = async (req, res) => {
	try {
		
       
        await myplan.deleteOne({_id:req.params.id})
		res.status(200).json({message:`Item with id ${req.params.id} deleted`});
		
	
		
	} catch (e) {
		res.status(404).json({ message: e.message });
	}
};
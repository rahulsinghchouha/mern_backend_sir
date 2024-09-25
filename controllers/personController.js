const personModel = require("../models/personModel");

exports.getAllPersons = async (req, res) => {
	try {
		const match = await personModel.find({});
		res.status(200).json({success: true, persons:match})
	} catch (error) {
		console.log(error);
		res.status(500).json({success: false, error})
	}
}

exports.addPerson = async (req, res) => {
	try {
		const {name, age, description, gender} = req.body;
		
		const newPerson = new personModel({
			name, age, description, gender, pic: req.file.filename
		});
		await newPerson.save();
		return res.status(200).json({success: true, msg:"Person added"});
	} catch (error) {
		console.log(error);
		res.status(500).json({success: false, error})
	}
}
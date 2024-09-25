const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
	name: String,
	age: Number,
	gender: {
		type:String,
		enum:['M', "F"]
	},
	description: String, 
	pic: String,
})

const personModel = mongoose.model("person", PersonSchema);


module.exports = personModel;
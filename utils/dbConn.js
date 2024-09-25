const mongoose = require("mongoose");

const connectDatabase = async () => {
	try {
		mongoose.connect("mongodb://localhost:27017/rahulmern");
	} catch (error) {
		console.log(error);
	}
} 


module.exports = connectDatabase;
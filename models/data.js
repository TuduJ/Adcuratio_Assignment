var mongoose = require("mongoose");

var DataSchema = new mongoose.Schema({
	id: String,
	name: String,
	age: String,
	gender: String,
	email: String,
	phoneNo: String
});

const Data = mongoose.model('Data', DataSchema)

module.exports = Data;


var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	id: String,
	name: String,
	age: String,
	gender: String,
	email: String,
	phoneNo: String
});


module.exports = mongoose.model("Data", UserSchema);


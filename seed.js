const mongoose = require('mongoose');
const Data = require('./models/data');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	console.log("DB Connected...")
})
.catch(err => {
	console.log(err);
})


const d = new Data({
	id: "3",
	name: "test3",
	age: "13",
	gender: "male",
	email: "test3@gmail.com",
	phoneNo: "9393939393"
})

d.save().then(p => {
	console.log(d)
})
.catch(e => {
	console.log(e)
})
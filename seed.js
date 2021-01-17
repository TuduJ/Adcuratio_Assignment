const mongoose = require('mongoose');
const Data = require('./models/data');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	console.log("DB Connected...")
})
.catch(err => {
	console.log(err);
})


const d = new Data(
	{
		id: "1",
		name: "test",
		age: "11",
		gender: "male",
		email: "test1@gmail.com",
		phoneNo: "9191919191"
	},
	{
		id: "2",
		name: "test2",
		age: "12",
		gender: "male",
		email: "test2@gmail.com",
		phoneNo: "9292929292"
	},
	{
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
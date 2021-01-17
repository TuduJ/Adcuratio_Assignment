const mongoose = require('mongoose');
const Data = require('./models/data');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
	console.log("DB Connected...")
})
.catch(err => {
	console.log(err);
})


const d1 = new Data(
	{
		id: "1",
		name: "test",
		age: "11",
		gender: "male",
		email: "test1@gmail.com",
		phoneNo: "9191919191"
	})
const d2 = new Data({
		id: "2",
		name: "test2",
		age: "12",
		gender: "male",
		email: "test2@gmail.com",
		phoneNo: "9292929292"
	})
const d3 = new Data({
		id: "3",
		name: "test3",
		age: "13",
		gender: "male",
		email: "test3@gmail.com",
		phoneNo: "9393939393"
})

d1.save().then(p => {
	console.log(d1)
})
.catch(e => {
	console.log(e)
})

d2.save().then(p => {
	console.log(d2)
})
.catch(e => {
	console.log(e)
})

d3.save().then(p => {
	console.log(d3)
})
.catch(e => {
	console.log(e)
})
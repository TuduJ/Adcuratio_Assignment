const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'SignUp'});
});

router.post('/', (req, res) =>{
	try {
		const {email, password} = req.body;
		const user = new User({email});
		const registerUser = User.register(user, password);
		console.log(registerUser);
		res.redirect('/users');
	}catch(e){
		console.log(e.message);
		res.redirect("/");
	}
})

module.exports = router;

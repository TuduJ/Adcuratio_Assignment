const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'SignUp'});
});

router.post('/', (req, res) =>{
	res.send(req.body)
})

module.exports = router;

var express = require('express');
var router = express.Router();

const Data = require('../models/data');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Data.find({}, function(err, allData){
		if(err){
			console.log(err);
		}else{
			res.render('users', {Data: allData, title: 'Data'} );
		}
	});
});

module.exports = router;

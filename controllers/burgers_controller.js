var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(request, response) {
	burger.all(function(data) {
		
		//this is the object that handles the handlebars argument in the .handlebars files.
		var hbsObject = { burger: data };
		console.log(hbsObject);
		//we can see here that it renders the "index" file where handlebars (hbsObject) match with key values. 
		response.render("index", hbsObject);
	});
});

router.post("/api/", function(request, response) {
	var burgerName = request.body.name;
	

	burger.create(["burger_name"], [request.body.burger_name], function(data) {
			response.redirect('/');
		});
});

router.put('/burger/:id', function(reqest, response) {

	var condition = "id = " + reqest.params.id;

	burger.devour({ devoured: true }, condition, function(data) {
		response.redirect('/');
	});
});

router.put('/burger_reorder/:id', function(request, response) {

	var condition = "id = " + request.params.id;

	burger.refresh({ devoured: false }, condition, function(data) {
		response.redirect('/');
	});
})

//ROUTE FOR DELETE 
router.delete('/burger/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('burger', condition);

	burger.clear(condition, function() {
		res.redirect('/');
	});
});

module.exports = router;
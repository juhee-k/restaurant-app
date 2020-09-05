//CALL THE O.R.M FUNCTIONS USING BURGER SPECIFIC INPUT FOR THE O.R.M.

var orm = require('../config/orm.js');

var burgers = {
	all: function (cb) {
		orm.all('burger', function (res) {
			cb(res);
		});
	},
	//COLS AND VALS ARE ARRAYS	
	create: function(cols, vals, cb) {
		orm.create('burger', cols, vals, function (res){
			cb(res);
		});
	},
	devour: function (objColVals, condition, cb) {
		orm.devour('burger', objColVals, condition, function (res) {
			cb(res);
		})
	},
	clear: function (condition, cb) {
		orm.clear('burger', condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burgers;	

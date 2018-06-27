var register = require('config/register');
module.exports = function(app) {

	app.get('/', function(req, res) {

		res.end("Node-Android-Project"); 
	});
	app.post('/register',function(req,res){
		var coordinates = req.body.email;
		register.register(coordinates,function (found) {
			console.log(found);
			res.json(found);
	});		
	});
	
};





require('dotenv').config()

var express    = require("express"),
	path       = require('path'),
	hbs        = require("express-handlebars"),
	bodyParser = require("body-parser"),
	app        = express();


app.use(express.static(__dirname + '/public'));
app.set("views", "./views");
app.engine('hbs', hbs());
app.set("view engine", "hbs");

app.get("/", function(req, res){
	res.render('home');
}); 

app.listen(process.env.HOST, function(){
	console.log("Server started");
});	
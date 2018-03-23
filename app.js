// require('dotenv').config()

var express    = require("express"),
	path       = require('path'),
	hbs        = require("express-handlebars"),
	bodyParser = require("body-parser"),
	app        = express();


app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.set("views", "./views");
app.engine('hbs', hbs());
app.set("view engine", "hbs");

app.get("/", function(req, res){
	res.render('home');
}); 

app.listen(app.get('port'), function(){
	console.log("Server started on port", app.get('port'));
});	
var express = require("express");

var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

//==========================
//ROUTES
//==========================

app.get("/", function(req, res){
	res.render("home");
});

app.get("/about", function(req, res){
	res.render("about");
});

app.get("/contact", function(req, res){
	res.render("contact");
});

app.get("/products", function(req, res){
	res.render("products");
});

app.get

app.listen("27015", "127.0.0.1", function(){
   console.log("Server is listening"); 
});
// NPM Packages
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var msyql = require("mysql");


var port = process.env.PORT || 3000;

var app = express();

// var cookieParser = require('cookie-parser');

var session = require('express-session');
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 }, resave: true, saveUninitialized: true }));
// app.use(cookieParser());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var hangmanController = require("./controllers/hangmanController.js");
var usersController = require("./controllers/usersController.js");
var scoresController = require("./controllers/scoresController.js");

app.use("/", hangmanController);
app.use("/users", usersController);
app.use("/scores", scoresController);


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
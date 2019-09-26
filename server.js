// import express so that we can build our express web server
var express = require("express");
var exphbs = require("express-handlebars");

// declare PORT, process.env.PORT is used in the production environment and this PORT number is provided it's value via heroku.
// when in the development environment use PORT 8080 (this port number is just a common convention)
var PORT = process.env.PORT || 2000;

// declare an instance of an express application
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// Static files include: client side javascript, css, and images
// express.static is provided the relative path for our public folder
app.use(express.static("public"));

/*
MIDDLEWARE FUNCTIONS
Parse application body as JSON
- Sets up the Express app to handle data parsing from POST requests
- Listens for request headers with content-type www.urlencoded
- Parses the incoming data and then feeds it to the req.body object
- extended: true syntax allows for rich objects and arrays to be encoded which allows for a JSON-like experience
- See the following stackoverflow post for further context on extended: true
*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
// app.engine is setting the view engine as well as the default layout. This line tells express to look in the /views/layouts folder a main.handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// when we run res.render('index'), express knows to look in our views folder for an index.handlers
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller");
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

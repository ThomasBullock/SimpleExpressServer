var express = require("express");
var app = express();
const path = require("path");
const routes = require("./routes");
var port = 6969;
const errorHandlers = require("./handlers/errorHandlers");
//do all the routing and etc

app.use(express.static(__dirname + "/public"));

// view engine setup
app.set("views", path.join(__dirname, "views")); // this is the folder where we keep our pug files
app.set("view engine", "pug"); // we use the engine pug, mustache or EJS work great too

app.use("/", routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

var listener = app.listen(port, "localhost", function () {
  console.log("Listening on port " + listener.address().port);
});

//Javascript file for posting new reservations, and saving

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Show table
app.get("/", function(req, res) {
    console.log('Reservations' + res);
    // res.sendFile(path.join(__dirname, "view.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
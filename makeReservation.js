//Javascript file for posting new reservations, and saving

//Dependencies
var app = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

var currentWaitingList = [];
var extendedWaitingList = [];

//Reserve a New Table
app.post("/api/new", function(req, res) {
	var newReservation = req.body;

	//If there are already 5 tables waiting
	if(currentWaitingList.length >= 5) {
		//push new reservation to extended waiting list
		extendedWaitingList.push(newReservation);
	} else {
		currentWaitingList.push(newReservation);
	}
});
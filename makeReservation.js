//Dependencies
var express = require('express');
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

var currentWaitingList = [{
        customerName: 'Brian',
        phoneNumber: '9085106980',
        customerEmail: 'fake@aol.com',
        customerID: '12'
    },
    {
        customerName: 'Elana',
        phoneNumber: '1233213333',
        customerEmail: '123@yahoo.com',
        customerID: '11'
    },
    {
        customerName: 'Rebecca',
        phoneNumber: '5555555555',
        customerEmail: 'blahblah@hotmail.com',
        customerID: '10'
    },
    {
        customerName: 'Ariene',
        phoneNumber: '11111111111',
        customerEmail: 'blergh@altavista.com',
        customerID: '9'
    },
    {
        customerName: 'Customer 5',
        phoneNumber: '55555555555',
        customerEmail: 'abcd@askjeeves.com',
        customerID: '8'
    }
];

var extendedWaitingList = [{
        customerName: 'Extra Waiting 1',
        phoneNumber: '8888888888',
        customerEmail: 'something@somethingelse.com',
        customerID: '13'
    },
    {
        customerName: 'Extra Waiting 2',
        phoneNumber: '9999999999',
        customerEmail: 'nothing@something.com',
        customerID: '15'
    },
];

// Show table
app.get("/", function(req, res) {
    console.log('Reservations' + res);
    res.sendFile(path.join(__dirname, "tables.html"));

});

app.get("/api/tables", function(req, res) {
	res.send(currentWaitingList);
})


//Reserve a New Table
app.post("/api/new", function(req, res) {
    var newReservation = req.body;

    //If there are already 5 tables waiting
    if (currentWaitingList.length >= 5) {
        //push new reservation to extended waiting list
        extendedWaitingList.push(newReservation);
    } else {
        currentWaitingList.push(newReservation);
    }

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
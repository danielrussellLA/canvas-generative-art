const express = require('express');
// middleware
const http = require('http');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// instantiate express app
const app = express();

// use middleware
app.use(morgan('dev'));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
app.route('/')
    .get(function (request, response) {

    })
    .post(function (request, response) {

    });

// create/run server
const PORT = process.env.PORT || 3000;
const server = http.createServer(app).listen(PORT);
console.log('listening on port ' + PORT);
'use strict';

//npm dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');;

//local dependencies
const routes = require('./routes/routes');

//server setup
const app = express(),
    port = process.env.PORT || 4000;

// set environment variables
// const env = app.get('env') || 'development';
// console.log('env', env);

// Handle environments
// if (env == 'production') {
//     app.all('*', ensureSecure);
// }

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('../dist'));
app.set('view engine', 'ejs');

const server = app.listen(port, () => {
    console.log('Example app listening at http://localhost:%s', port);
});

//define our routes
routes.init(app);

// const io = require('socket.io')(server);
//
// const socket = require('./services/socket');
// socket.events(io);

//in case we need the instance later
module.exports = server;

// Redirect all HTTP traffic to HTTPS
// function ensureSecure(req, res, next) {
//     if (req.headers["x-forwarded-proto"] === "https") {
//         // OK, continue
//         return next();
//     }
//
//     res.redirect('https://' + req.hostname + req.url);
// }
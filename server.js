const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const currentBooks = require('./routes/api/currentBooks');

//always require and configure near the top
require('dotenv').config();

//connect to the database 
require('./config/database');

const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//middleware to check and very a JWT and 
//assign user object from the JWT to req.user
app.use(require('./config/checkToken'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
// app.use('/api/current-book', currentBooks);
app.use('/api/current-book', require('./routes/api/currentBooks'));
app.use('/api/want-book', require('./routes/api/wantBooks'));

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

const port = process.env.PORT || 5001;
app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });
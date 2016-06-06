var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
// var summonerApi = require('./routes/api/summoner');
// var championmasteryApi = require('./routes/api/championmastery');

var app = express();

// view engine setup
app.set('routes', path.join(__dirname, 'routes'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Serve static content for the app from the "public" directory in the application directory.

// GET /style.css etc
app.use(express.static(__dirname + '/public'));

// Mount the middleware at "/static" to serve static content only when their request path is prefixed with "/static".

// GET /static/style.css etc.
app.use('/static', express.static(__dirname + '/public'));

app.use('/', index);
//app.use('/api/summoner', summonerApi);
//app.use('/api/championmastery', championmasteryApi);
// catch 404 and forward to error handler
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
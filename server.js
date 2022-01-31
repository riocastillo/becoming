var express = require('express');
var app = express();
var port = process.env.PORT || 2121;

// var session = require('express-session');
// var bodyParser = require('body-parser');

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

// // Use the session middleware
// app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))


app.get('/', function (req, res) {
    res.redirect('/index'); // spits out the html and respond
});

app.listen(port);
console.log('The magic happens on port ' + port);

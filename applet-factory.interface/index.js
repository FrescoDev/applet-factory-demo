var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static('./'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + './index.html'));
});

app.listen(port);
console.log('Server listening on port: ' + port);

module.exports = app;
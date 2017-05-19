const port = 4567;

var express = require('express');
var app = express();
var ioc = require('socket.io-client');
var client = ioc.connect("http://localhost:" + port);

client.once("connect", function() {
    console.log('Client: Connected to port ' + port);
});

// Logger
app.use(morgan('dev'));

app.get('/', function(req, res) {
    client.emit('msg', { user: 'me', msg: 'whazzzup?' });
    res.send('Hello World!')
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
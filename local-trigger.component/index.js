const morgan = require('morgan');
const socket = {
    host: "http://localhost:",
    port: 4567
};
const express = require('express');
const app = express();
const ioc = require('socket.io-client');
const client = ioc.connect(socket.host + socket.port);

client.once("connect", function() {
    console.log('Client -- Connected to port ' + socket.port);
});

// Logger
app.use(morgan('dev'));

app.get('/', function(req, res) {
    client.emit('msg', { user: 'me', msg: 'whazzzup?' });
    res.send('Hello World!')
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});
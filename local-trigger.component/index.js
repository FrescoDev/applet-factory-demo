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
//app.use(morgan('dev'));

const trigger1 = {
    ownerId: 'john',
    type: 'leftWork',
    triggerAt: new Date()
}

const trigger2 = {
    ownerId: 'john',
    type: 'monday9pm',
    triggerAt: new Date()
}

app.get('/trigger-1', function(req, res) {
    client.emit('trigger-1', trigger1);
    res.send('Trigger 1 sent!')
});

app.get('/trigger-2', function(req, res) {
    client.emit('trigger-2', trigger2);
    res.send('Trigger 2 sent!')
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});
import bodyParser from 'body-parser';
import cache from '../cache';
import cors from 'cors';
import errorHandler from 'errorhandler';
import express from 'express';
import helmet from 'helmet';
import methodOverride from 'method-override';
import morgan from 'morgan';
import routes from './http.request.handling/routes';
import settings from '../configuration';

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Adds some security best practices
app.use(helmet());
app.use(cors());

// Logger
if (!settings.envs.test) {
    app.use(morgan('dev'));
}

// Properly Decode JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add all HTTP methods
app.use(methodOverride());

// Mount API routes
app.use('/', routes);

// Only use error handler in development
if (settings.envs.development) {
    app.use(errorHandler());
}

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('msg', function(data) {
        console.log(data);
    });
});

server.listen(settings.port, () => {
    // eslint-disable-next-line no-console
    console.log(`
    === App Server ===

    Connected on:
    
    Port: ${settings.port}
    Env: ${app.get('env')}
    
  `)
});

export default server;
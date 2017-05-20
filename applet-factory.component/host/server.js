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
import http from 'http';
import socket from 'socket.io';
import handle from '../core/actions/trigger.handler';

const app = express();
const server = http.createServer(app);
const io = socket(server);

// Logger
if (!settings.envs.test) {
    app.use(morgan('dev'));
}

app.use(cors);

// Properly Decode JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add all HTTP methods
app.use(methodOverride());

// Mount API routes
app.use('/', routes);

io.on('connection', (client) => {
    console.log('Server -- Client connected to socket');

    client.on('trigger', (trigger) => {
        console.log('Server -- Recieved message from client: ' + JSON.stringify(trigger));
        handle(trigger)
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
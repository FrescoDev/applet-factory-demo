process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('babel-core/register');
require('babel-polyfill');

process.env.NODE_ENV == 'development' ? module.exports = require('./applet-factory.component/host/server') : module.exports = require('./build/applet-factory.component/host/server');
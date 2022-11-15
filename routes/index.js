const express = require('express');

// Import our modular routers for /tips and /feedback
const apiRouter = require('./apiroutes');
// TODO: import your diagnostics route

const app = express();

app.use('/', apiRouter);


module.exports = app;
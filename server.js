require('dotenv').config()
const express = require('express');

const http = require('http');
const app = require('./App');

const path = require('path');
app.use(express.static(path.join(__dirname, 'Client/build')))

const server = http.createServer(app)
server.listen(process.env.PORT);

console.log('Server running on port: ' + process.env.PORT +'....');
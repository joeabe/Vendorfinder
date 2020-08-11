const express = require('express');
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan');    //To log responses on console
const cors = require('cors');
const path = require("path")


mongoose.connect('mongodb://localhost/SearchMe', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());



/********************Routes**********************/
app.use('/api/signUp', require('./Router/signUp'));
app.use('/api/signIn', require('./Router/signIn'));
app.use('/api/dashboard', require('./Router/dashboard'));

app.use('/api/shops',  require('./Router/businessTypes/myShops'));
app.use('/api/hangouts', require('./Router/businessTypes/hangouts'));
app.use('/api/wellness', require('./Router/businessTypes/wellness'));
app.use('/api/services', require('./Router/businessTypes/services'));

app.use(express.static(path.join(__dirname, 'Client', 'build')));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'Client', 'build', 'index.html'));
 });

module.exports = app;
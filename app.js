
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const indexRouter = require('./routers/indexRouters');

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use('/api/books', indexRouter);

module.exports = app;
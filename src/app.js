const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();


//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use(require('./routes/routes'))

module.exports = app;
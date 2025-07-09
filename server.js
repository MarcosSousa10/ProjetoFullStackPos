const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const urlRoutes = require('./routes/urlRoutes');
app.use('/api', urlRoutes);

module.exports = app;

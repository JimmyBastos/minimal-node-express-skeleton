const express = require('express');
const cors = require('cors');
const { errors: handleValidationErrors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use(handleValidationErrors({ statusCode: 422 }));

module.exports = app;

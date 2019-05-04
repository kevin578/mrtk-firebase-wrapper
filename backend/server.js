const express = require('express');
const router = require('express').Router();
const routes = require('./routes');
const app = express();


app.use(routes);

const port = process.env.PORT || 5000;



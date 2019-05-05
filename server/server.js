const express = require('express');
const router = require('express').Router();
const routes = require('./routes');
const passport = require("passport");

require('dotenv').config()
// require('./passport.js');

const app = express();


app.use(routes);
// app.use(passport.initialize());
// app.use(passport.session());

const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`App is running on Port ${port}`)
})



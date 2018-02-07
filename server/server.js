"use strict";

const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config({ path: ".env"});
const fetch = require('node-fetch');
const mongoose = require('mongoose');
const Search = require('../api/models/searchModel.js');
const routes = require("../api/routes/routes.js");
const app = express();

app.use(express.static('publicPath'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/imageSearch');

routes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on 3000");
});
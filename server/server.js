"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const publicPath = path.join(__dirname, "..", "views");
const app = express();

app.use(express.static('publicPath'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");


app.get("/", (req, res) => {
  res.render(path.join(publicPath, 'index.html.ejs'));
});

// app.get("/random.js", (req, res) => {
  
// });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on 3000");
});
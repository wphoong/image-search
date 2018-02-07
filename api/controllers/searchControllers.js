"use strict";
const fetch = require('node-fetch');

const mongoose = require('mongoose');
const Search = mongoose.model('Searches');

exports.search_images = (req, res) => {
  const key = process.env.API_KEY;
  const query = req.params[0];
  let offset = req.query.offset;
  let url = "";

  if (offset != undefined) {
    url = "https://pixabay.com/api/?key=" + key + "&q=" + query + "&image_type=photo&per_page=" + offset;
  } else {
    url = "https://pixabay.com/api/?key=" + key + "&q=" + query + "&image_type=photo";
  }

  console.log(url);

  fetch(url).then((res) => {
    if (res.ok) {
      return res.json();
    }
  }).then((data) => {

    const searchData = {
      Search: query
    };

    const newSearch = new Search(searchData);
    newSearch.save((err, search) => {
      if (err) return res.send(err);
      console.log(search + " saved to db");

      res.json(data);
    });

  });
};

exports.latest = (req, res) => {
  Search.find({}, (err, search) => {
    if (err) return res.send(err);
    res.json(search);
  });
};
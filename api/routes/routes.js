"use strict";

module.exports = (app) => {
  const search = require("../controllers/searchControllers.js");

  app.get('/', (req, res) => {
    res.render('index.html.ejs');
  });

  app.get('/api/image-search/*', search.search_images);

  app.get('/api/image-search-latest', search.latest);

};

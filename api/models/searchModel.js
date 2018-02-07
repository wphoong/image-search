"use strict";
const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SearchSchema = new Schema({
  Search: {
    type: String
  },
  Created_date: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  }
});

module.exports = mongoose.model("Searches", SearchSchema);
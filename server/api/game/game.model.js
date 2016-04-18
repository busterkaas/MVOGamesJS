'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var GameSchema = new mongoose.Schema({
  title: String,
  info: String,
  releaseDate: Date,
  coverUrl: String,
  trailerUrl: String,

  platforms:[{
    name: String,
    price: Number,
    stock: Number
  }],

  genres:[{
    name: String
  }],
});

export default mongoose.model('Game', GameSchema);

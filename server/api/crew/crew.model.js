'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CrewSchema = new mongoose.Schema({
  name: String,
  crewImgUrl: String,
  leader: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  users: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }],
  applicants: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }],
  crewMessages:[{
    user:{
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    message:String,
  }],
  gameSuggestions: [{
    discount: Number,
    expiration: Date,
    game: {
      type: mongoose.Schema.ObjectId,
      ref: 'Game'
    },platform: {
        name: String,
        price: Number,
    },
    users: [{
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      },
      confirmed: Boolean
    }]
  }]
});

export default mongoose.model('Crew', CrewSchema);

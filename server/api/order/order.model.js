'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var OrderSchema = new mongoose.Schema({
  date: Date,
  comment: String,
  orderlines:[{
    amount: Number,
    game:{
      type: mongoose.Schema.ObjectId,
      ref: 'Game'
    },
    platform:{
      name: String,
      price: Number,
      stock: Number,
      platformImgUrl: String
    }
  }],
  user:{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
});

export default mongoose.model('Order', OrderSchema);

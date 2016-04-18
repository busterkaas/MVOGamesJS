'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var OrderSchema = new mongoose.Schema({
  date: Date,
  comment: String,
  orderlines:[{
    type: mongoose.Schema.ObjectId,
    ref: 'Game',
    amount: Number,
  }]
});

export default mongoose.model('Order', OrderSchema);

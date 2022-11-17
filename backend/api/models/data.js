const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  userId: {
    type: Number,
    required: true
  }
});

const Data = mongoose.model('Data', DataSchema);

module.exports = Data
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
  description: String,
//   publishedYear: {
//     type: Number,
//     required: true
//   },
  price: {
    type: Number,
  },
  series: {
    name: {
      type: String
    },
    volume: {
      type: Number
    }
  },
  imageUrl: String
});

module.exports = bookSchema;
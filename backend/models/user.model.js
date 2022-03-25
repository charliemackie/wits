const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  ID: {
    type: String,
    required: true,
    trim: true,
  },
  Snack: {
    type: String,
    required: true,
    trim: true,
  },
  Allergy: {
    type: String,
    required: true,
    trim: true,
  },
  Noise: {
    type: String,
    required: true,
    trim: true,
  },
  Light: {
    type: String,
    required: true,
    trim: true,
  }, 
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
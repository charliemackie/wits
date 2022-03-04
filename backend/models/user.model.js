const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  User_Name: {
    type: String,
    required: true,
    trim: true,
  },
  Address: {
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
  Lighting: {
    type: String,
    required: true,
    trim: true,
  }, 
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
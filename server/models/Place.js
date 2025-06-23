const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  tags: [String], // e.g., romantic, peaceful, crowd-free, budget
  location: {
    city: String,
    address: String,
    coordinates: {
      lat: Number,
      lng: Number,
    },
  },
  partner: { type: mongoose.Schema.Types.ObjectId, ref: 'Partner' },
  bookingUrl: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Place', placeSchema);

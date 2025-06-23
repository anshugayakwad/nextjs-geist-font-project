const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: String,
  listings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Partner', partnerSchema);

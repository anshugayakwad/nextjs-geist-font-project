const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  preferences: {
    outingTypes: [String],
    companions: [String],
    moods: [String],
    interests: [String],
    budget: String,
  },
  savedPlans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plan' }],
  history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Plan' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);

const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

// Simple rule-based recommendation API for MVP
router.post('/', async (req, res) => {
  const { outingType, companion, location, mood, timeOfDay, budget, interests } = req.body;

  try {
    // Basic filter example: find places matching tags and location
    const filters = {
      'location.city': location,
      tags: { $in: [outingType.toLowerCase(), companion.toLowerCase(), mood ? mood.toLowerCase() : null].filter(Boolean) },
    };

    const places = await Place.find(filters).limit(10);

    res.json({ success: true, recommendations: places });
  } catch (error) {
    console.error('Recommendation API error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;

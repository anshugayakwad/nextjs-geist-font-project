const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recommendationRoutes = require('./routes/recommendation');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/recommendations', recommendationRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/outings-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

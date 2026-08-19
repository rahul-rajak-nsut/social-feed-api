
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Social Feed API is running' });
});
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
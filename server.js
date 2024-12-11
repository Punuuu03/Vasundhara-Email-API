// File: server.js
// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const cors = require('cors');
// eslint-disable-next-line no-undef
const emailRoutes = require('./routes/emailRoutes');

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

// Use routes
app.use('/api', emailRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

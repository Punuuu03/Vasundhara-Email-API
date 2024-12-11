// File: routes/emailRoutes.js
// eslint-disable-next-line no-undef
const express = require('express');
const {
  sendVerificationEmail,
  sendVolunteerForm,
// eslint-disable-next-line no-undef
} = require('../controllers/emailController');

const router = express.Router();

// Routes
router.post('/send-verification', sendVerificationEmail);
router.post('/send-volunteer', sendVolunteerForm);

// eslint-disable-next-line no-undef
module.exports = router;

// File: utils/nodemailerTransport.js
// eslint-disable-next-line no-undef
const nodemailer = require('nodemailer');

// Configure nodemailer transport
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // Replace with your SMTP host
  port: 465, // Use 465 for SSL
  secure: true, // Must be true for SSL
  auth: {
    user: 'support@vasuundhara.com', // Replace with your SMTP username
    pass: 'Vsupport@2023', // Replace with your SMTP password
  },
});

// Test SMTP Connection
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Connected:', success);
  }
});

// eslint-disable-next-line no-undef
module.exports = transporter;

// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const cors = require('cors');
// eslint-disable-next-line no-undef
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

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

// Route: Send verification email
app.post('/api/send-verification', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `Vasuundhara Support <support@vasuundhara.com>`,
      to: 'support@vasuundhara.com',
      subject: `Verification Request from ${name} (${email})`,
      text: `A new verification request has been submitted:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    });

    res.status(200).send('Verification email sent to admin successfully.');
  } catch (error) {
    console.error('Error sending verification email:', error);
    res.status(500).send('Failed to send verification email.');
  }
});

// Route: Send volunteer form details
app.post('/api/send-volunteer', async (req, res) => {
  const { name, email, contact, message } = req.body;

  try {
    await transporter.sendMail({
      from: `Vasuundhara Support <support@vasuundhara.com>`,
      to: 'support@vasuundhara.com',
      subject: `New Volunteer Submission from ${name} (${email})`,
      text: `A new volunteer submission has been received:
      
      Name: ${name}
      Email: ${email}
      Contact: ${contact}
      Message: ${message}`,
    });

    res.status(200).send('Volunteer submission email sent to admin successfully.');
  } catch (error) {
    console.error('Error sending volunteer submission email:', error);
    res.status(500).send('Failed to send volunteer submission email.');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

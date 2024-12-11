// File: controllers/emailController.js
// eslint-disable-next-line no-undef
const transporter = require('../utils/nodemailerTransport');

// Controller: Send verification email
const sendVerificationEmail = async (req, res) => {
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
};

// Controller: Send volunteer form details
const sendVolunteerForm = async (req, res) => {
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
};

// eslint-disable-next-line no-undef
module.exports = {
  sendVerificationEmail,
  sendVolunteerForm,
};

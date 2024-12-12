import express from 'express';
import { sendVerificationEmail, sendVolunteerForm } from '../controllers/emailController.js';

const router = express.Router();

// Routes
router.post('/send-verification', sendVerificationEmail);
router.post('/send-volunteer', sendVolunteerForm);

export default router;

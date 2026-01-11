const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Portfolio Backend is Running');
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    // Only send email if credentials are present
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail', // Or use generic SMTP
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER, // Sender address (must be the same as auth user for Gmail)
        replyTo: email, // The user's email address, so you can reply to them directly
        to: process.env.EMAIL_USER, 
        subject: `Portfolio Contact form: ${name}`,
        text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } else {
      // Mock success for demo purposes if no credentials
      console.log('Mock Email Sent:', { name, email, message });
      res.status(200).json({ success: true, message: 'Message received (Mock Mode)!' });
    }
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

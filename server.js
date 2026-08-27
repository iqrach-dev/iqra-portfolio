require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Where contact-form messages should be delivered
const RECEIVING_EMAILS = [
  'iqraaachoudhary387@gmail.com',
  'iqraaachoudhary93@gmail.com'
];

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  // If no email credentials are configured yet, just log the message
  // instead of failing — useful while testing locally.
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.log('--- New contact form message (email not configured) ---');
    console.log({ name, email, message });
    return res.json({ ok: true, note: 'Logged locally (email not configured yet).' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.GMAIL_USER}>`,
      to: RECEIVING_EMAILS.join(','),
      replyTo: email,
      subject: `New message from ${name} (via portfolio site)`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message.replace(/\n/g, '<br>')}</p>`
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Email send failed:', err.message);
    res.status(500).json({ error: 'Could not send message right now. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});

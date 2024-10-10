import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
  const { user_name, user_email, user_phone, user_location, user_message } =
    req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `meirasyachting.com ${user_name} Kişisinden Yeni Mesaj!`,
    html: `
      <p><strong>İsim:</strong> ${user_name}</p>
        <p><strong>E-mail:</strong> ${user_email}</p>
        <p><strong>Telefon:</strong> ${user_phone}</p>
        <p><strong>Şehir:</strong> ${user_location}</p>
        <p><strong>Mesaj:</strong><br>${user_message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    } else {
      return res.status(200).json({ message: 'Email sent successfully!' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

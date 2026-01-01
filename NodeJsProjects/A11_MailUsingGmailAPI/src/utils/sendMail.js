import { createTransporter } from '../configs/nodemailer.config.js';

const sendMail = async ({ to, subject, text, html }) => {
  try {
    const transporter = await createTransporter();

    const mailOptions = {
      from: `Wasiq <${process.env.AUTHORIZE_MAIL}>`,
      to,
      subject,
      text,
      html,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.log('sendMail error:', error.message);
  }
};

export default sendMail;

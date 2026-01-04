import { createTransporter } from '../configs/nodemailer.config.js';
import templates from '../templates/index.js';

const sendMail = async ({ to, templateName, data }) => {
  try {
    const transporter = await createTransporter();

    const template = templates[templateName];
    if (!template) {
      throw new Error(`Email template "${templateName}" not found`);
    }

    const { subject, html, text } = template(data);

    const mailOptions = {
      from: `Wasiq <${process.env.AUTHORIZE_MAIL}>`,
      to,
      subject,
      html,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error('sendMail error:', error.message);
    throw error;
  }
};

export default sendMail;

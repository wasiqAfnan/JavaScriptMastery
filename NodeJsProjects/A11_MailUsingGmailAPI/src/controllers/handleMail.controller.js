import sendMail from '../utils/sendMail.js';
import constants from '../constants.js';

export const handleMail = async (req, res) => {
  try {

    await sendMail({
      to: constants.RECEIVER_MAIL,
      subject: 'Welcome to BiteBot 🚀',
      text: `Hello User, welcome aboard!`,
      html: `<h2>Hello User👋</h2><p>Welcome to BiteBot!</p>`,
    });

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Controller error:', error.message);

    return res.status(500).json({
      success: false,
      message: 'Failed to send email',
    });
  }
};

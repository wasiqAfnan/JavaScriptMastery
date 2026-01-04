import sendMail from '../utils/sendMail.js';

export const handleMail = async (req, res) => {
  try {
    const { email, name } = req.query;

    await sendMail({
      to: email,
      templateName: 'welcome',
      data: { name },
    });

    res.json({ success: true, message: 'Welcome to bitebot' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

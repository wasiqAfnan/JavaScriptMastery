import "dotenv/config";

const constants = {
  AUTHORIZE_MAIL: process.env.AUTHORIZE_MAIL,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  REDIRECT_URI: process.env.REDIRECT_URI,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  RECEIVER_MAIL: process.env.RECEIVER_MAIL,
};

export default constants;
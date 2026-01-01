import { google } from 'googleapis';
import constants from '../constants.js';

// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;
// const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// export const AUTHORIZE_MAIL = process.env.AUTHORIZE_MAIL;

if (!constants.REFRESH_TOKEN) {
  throw new Error('REFRESH_TOKEN is missing. Check dotenv loading.');
}

const oAuth2Client = new google.auth.OAuth2(
  constants.CLIENT_ID,
  constants.CLIENT_SECRET,
  constants.REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: constants.REFRESH_TOKEN,
});

export default oAuth2Client;
// export const oauthCredentials = {
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REFRESH_TOKEN,
// };

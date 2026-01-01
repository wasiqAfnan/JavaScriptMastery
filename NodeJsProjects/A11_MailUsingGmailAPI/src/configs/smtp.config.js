import { google } from 'googleapis';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

export const AUTHORIZE_MAIL = process.env.AUTHORIZE_MAIL;

export const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

export const oauthCredentials = {
  CLIENT_ID,
  CLIENT_SECRET,
  REFRESH_TOKEN,
};

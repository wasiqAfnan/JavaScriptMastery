import nodemailer from 'nodemailer';
import {
  oAuth2Client,
  oauthCredentials,
  AUTHORIZE_MAIL,
} from './smtp.config.js';

export const createTransporter = async () => {
  const { token } = await oAuth2Client.getAccessToken();

  if (!token) {
    throw new Error('Failed to generate access token');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: AUTHORIZE_MAIL,
      clientId: oauthCredentials.CLIENT_ID,
      clientSecret: oauthCredentials.CLIENT_SECRET,
      refreshToken: oauthCredentials.REFRESH_TOKEN,
      accessToken: token,
    },
  });
};

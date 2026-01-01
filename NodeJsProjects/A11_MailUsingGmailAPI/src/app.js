import nodemailer from "nodemailer";
import { google } from "googleapis";
import dotenv from "dotenv";
import express from "express";
import {handleMail} from "./controllers/handleMail.controller.js";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Go to /sendmail to send an email" });
});

app.get("/sendmail", handleMail);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// These id's and secrets should come from .env file.
// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;
// const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

// const oAuth2Client = new google.auth.OAuth2(
//   CLIENT_ID,
//   CLIENT_SECRET,
//   REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// async function sendMail() {
//   try {
//     const { token } = await oAuth2Client.getAccessToken();

//     const transport = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.AUTHORIZE_MAIL,
//         clientId: CLIENT_ID,
//         clientSecret: CLIENT_SECRET,
//         refreshToken: REFRESH_TOKEN,
//         accessToken: token,
//       },
//     });

//     const mailOptions = {
//       from: `Wasiq <${process.env.AUTHORIZE_MAIL}>`,
//       to: process.env.RECEIVER_MAIL,
//       subject: "Hello from gmail using API",
//       text: "Hello from gmail email using API",
//       html: "<h1>Hello from gmail email using API + Nodemailer</h1>",
//     };

//     const result = await transport.sendMail(mailOptions);
//     return result;
//   } catch (error) {
//     console.log("Error Occured: ", error);
//   }
// }

// sendMail()
//   .then((result) => console.log("Email sent...", result))
//   .catch((error) => console.log(error.message));

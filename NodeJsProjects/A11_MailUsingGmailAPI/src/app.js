import express from "express";
import {handleMail} from "./controllers/handleMail.controller.js";


const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Go to /sendmail to send an email" });
});

app.get("/sendmail", handleMail);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
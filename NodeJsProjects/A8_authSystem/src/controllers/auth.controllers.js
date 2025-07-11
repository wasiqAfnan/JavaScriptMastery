import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

export const handleBasicGetRequest = (req, res) => {
  res.status(200).json({
    message: `Auth routes are up and running. To signup go to /register, to login go to /login`,
  });
};

export const handleRegister = async (req, res) => {
  try {
    // get name, email and pw from body
    const { name, email, password } = req.body;
    // validate
    if (!(name && email && password)) {
      res.status(400).json({ message: "All field must be passed" });
    }
    
    // validate if user exists
    let user = await User.findOne({ email });
    if (user) {
        res.status(400).json({ message: "User already exists with this email" });
    }
    // pw hashed
    console.log("Hola");
    const hashedPw = await bcrypt.hash(password, 10);
    // save to db
    user = await User.create({
      uName: name,
      uEmail: email,
      uPass: hashedPw,
    });
    console.log(user);
    
    // send response
    res.status(201).json({
      message: "User has been created successfully.",
      userData: { name: user.uName, email: user.uEmail },
    });
  } catch (error) {
    console.log("Some Error Occured: ", error);
  }
};

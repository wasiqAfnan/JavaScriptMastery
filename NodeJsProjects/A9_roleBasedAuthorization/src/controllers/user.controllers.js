import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

export const handleRegister = async (req, res) => {
    try {
        // get name, email and pw from body
        const { name, email, password, role } = req.body;
        // validate
        if (!(name && email && password)) {
            return res
                .status(400)
                .json({ message: "All field must be passed" });
        }

        // validate if user exists
        let user = await User.findOne({ uEmail: email });
        if (user) {
            return res
                .status(400)
                .json({ message: "User already exists with this email" });
        }
        // pw hashed
        const hashedPw = await bcrypt.hash(password, 10);
        // save to db
        user = new User({
            uName: name,
            uEmail: email,
            uPass: hashedPw,
        });

        if (role) user.uRole = role;
        const savedUser = await user.save();
        // send response
        return res.status(201).json({
            message: "User has been created successfully.",
            userData: {
                name: savedUser.uName,
                email: savedUser.uEmail,
                role: savedUser.uRole,
            },
        });
    } catch (error) {
        console.log("Some Error Occured: ", error);
    }
};
export const handleLogin = async (req, res) => {};
export const handleLogout = async (req, res) => {};

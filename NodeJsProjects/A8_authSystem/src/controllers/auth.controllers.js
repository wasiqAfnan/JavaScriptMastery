import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

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
            return res
                .status(400)
                .json({ message: "All field must be passed" });
        }

        // validate if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ message: "User already exists with this email" });
        }
        // pw hashed
        const hashedPw = await bcrypt.hash(password, 10);
        // save to db
        user = await User.create({
            uName: name,
            uEmail: email,
            uPass: hashedPw,
        });

        // send response
        return res.status(201).json({
            message: "User has been created successfully.",
            userData: { name: user.uName, email: user.uEmail },
        });
    } catch (error) {
        console.log("Some Error Occured: ", error);
        // Check for Mongo duplicate error
        if (error.code === 11000) {
            return res.status(400).json({
                message: "User already exists with this email",
            });
        }

        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};

export const handleLogin = async (req, res) => {
    try {
        // get email and pw from body
        const { email, password } = req.body;
        // validate
        if (!(email && password)) {
            return res
                .status(400)
                .json({ message: "All field must be passed" });
        }
        // validate if user exists
        let user = await User.findOne({ uEmail: email });

        if (!user) {
            return res.status(400).json({
                message:
                    "User does not exists with this email or email is invalid",
            });
        }
        // compare pw hashed
        const matchedPw = await bcrypt.compare(password, user.uPass);
        if (!matchedPw) {
            return res.status(400).json({ message: "Password is invalid" });
        }
        // token create
        const token = jwt.sign(
            { id: user._id, email: user.uEmail },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        // send cookie and response
        return res
            .status(201)
            .cookie("token", token, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000, // 1 day
            })
            .json({
                message:
                    "You have been authorized successfully. To access dashboard go to /dashboard",
            });
    } catch (error) {
        console.log("Some Error Occured: ", error);
    }
};

export const handleLogout = async (req, res) => {
    return res.status(200).clearCookie("token").json({
        message: "You have been logged out successfully",
    });
};

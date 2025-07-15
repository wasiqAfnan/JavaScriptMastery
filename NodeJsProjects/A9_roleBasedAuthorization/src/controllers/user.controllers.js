import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import { ApiError, ApiResponse } from "../util/index.js";

export const handleRegister = async (req, res, next) => {
    try {
        // get name, email and pw from body
        const { name, email, password } = req.body;
        // validate
        if (!(name && email && password)) {
            throw new ApiError("All field must be passed", 400);
        }

        // validate if user exists
        let user = await User.findOne({ uEmail: email });
        if (user) {
            throw new ApiError("User already exists with this email", 400);
        }

        // save to db
        user = new User({
            uName: name,
            uEmail: email,
            uPass: password,
        });

        const savedUser = await user.save();
        // send response
        return res.status(201).json(
            new ApiResponse(201, "User Created Successfully", {
                name: savedUser.uName,
                email: savedUser.uEmail,
                role: savedUser.uRole,
            })
        );
    } catch (error) {
        console.log("Some Error Occured: ", error);
        next(error);
    }
};
export const handleLogin = async (req, res) => {};
export const handleLogout = async (req, res) => {};

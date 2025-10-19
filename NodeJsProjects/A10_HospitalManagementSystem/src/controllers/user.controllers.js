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

        // check if user have passed empty string in any of the field
        if ([name, email, password].some((field) => field?.trim() === "")) {
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
         // If the error is already an instance of ApiError, pass it to the error handler
        if (error instanceof ApiError) {
            return next(error);
        }

        // For all other errors, send a generic error message
        return next(new ApiError("Something went wrong during registration", 500));
    }
};
export const handleLogin = async (req, res, next) => {
    try {
        // get email and pw from body
        const { email, password } = req.body;
        // validate
        if (!(email && password)) {
            throw new ApiError("All field must be passed", 400);
        }

        // check if user have passed empty string in any of the field
        if ([email, password].some((field) => field?.trim() === "")) {
            throw new ApiError("All field must be passed", 400);
        }

        // validate if user exists
        let user = await User.findOne({ uEmail: email }).select("+uPass");

        if (!user) {
            throw new ApiError(
                "User does not exists with this email or email is invalid",
                400
            );
        }
        // compare pw hashed
        const matchedPw = await user.isPasswordCorrect(password);
        if (!matchedPw) {
            throw new ApiError("Password is invalid", 400);
        }

        user.uPass = undefined;
        // token create
        const token = await user.generateAccessToken();

        // send cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        });

        // send response
        return res
            .status(200)
            .json(new ApiResponse(200, "Login Successful", user));
    } catch (error) {
        console.log("Some Error Occured: ", error);
        next(error);
    }
};
export const handleLogout = async (req, res) => {
    res.clearCookie("token");
    return res
        .status(200)
        .json(new ApiResponse(200, "Logged out successfully"));
};


import jwt from "jsonwebtoken";
import User from "../models/user.models.js";
import { ApiError, ApiResponse } from "../util/index.js";
import constants from "../constants.js";

export const isLoggedIn = async (req, res, next) => {
    // get the token from cookie
    const token = req.cookies.token;
    // validate
    if (!token) {
        throw new ApiError("Not logged in", 401);
    }
    try {
        // decode token
        const payload = jwt.verify(token, constants.JWT_SECRET);
        // finding user on db based on decoded token data
        const user = await User.findOne({ _id: payload.id });
        // validate user
        if (!user) {
            throw new ApiError("Not logged in", 401);
        }
        // if user exist then setting up req.user obj to pass to handler
        req.user = {
            id: user._id,
            name: user.uName,
            email: user.uEmail,
            role: user.uRole,
        };

        return next();
    } catch (error) {
        console.error("Auth error:", error);
        next(error);
    }
};

export const isAuthorized =
    (...roles) =>
    async (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return new ApiError(
                "You are not authorized to access this route",
                403
            );
        }
        next();
    };

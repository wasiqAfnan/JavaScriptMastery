import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

export const authMiddleware = async (req, res, next) => {
    // get the token from cookie
    const token = req.cookies.token;
    // validate
    if (!token) {
        return res.status(403).json({
            message: "Unauthorized! Please login to access dashbaboard",
        });
    }
    try {
        // decode token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // finding user on db based on decoded token data
        const user = await User.findOne({ _id: payload.id }).select(
            "uName uEmail _id"
        );
        // validate user
        if (!user) {
            return res.status(403).json({
                message: "Token not valid",
            });
        }
        // if uyser exist then setting up req.user obj to pass to handler
        req.user = {
            id: user._id,
            name: user.uName,
            email: user.uEmail,
        };

        return next();
    } catch (error) {
        console.error("Auth error:", error);
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

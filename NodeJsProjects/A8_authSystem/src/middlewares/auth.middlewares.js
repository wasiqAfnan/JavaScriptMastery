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
    // decode token
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: payload.id }).select(
            "uName uEmail _id"
        );
        if (!user) {
            return res.status(403).json({
                message: "Token not valid",
            });
        }

        req.user = {
            id: user._id,
            name: user.uName,
            email: user.uEmail,
        };
    } catch (error) {
        console.error("Auth error:", error);
        return res.status(403).json({ message: "Invalid or expired token" });
    } finally {
        next();
    }
};

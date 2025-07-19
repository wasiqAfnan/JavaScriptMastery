import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import constants from "../constants.js";

const userSchema = new mongoose.Schema(
    {
        uName: {
            type: String,
            required: [true, "Name is require"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        uEmail: {
            type: String,
            required: [true, "Email is require"],
            unique: true,
            lowercase: true,
        },
        uPass: {
            type: String,
            require: [true, "Password is required"],
            select: false, // secure option: don't return password by default
        },
        uRole: {
            type: String,
            enum: ["ADMIN", "USER"],
            default: "USER",
        },
    },
    { timestamps: true }
);

// it's a pre-defined mongoDB hook that will run automatically when save()
// function has been called in user.controllers.js
userSchema.pre("save", async function (next) {
    if (!this.isModified("uPass")) {
        return next();
    }

    this.uPass = await bcrypt.hash(this.uPass, 10);
});

userSchema.methods.isPasswordCorrect = async function (password) {
    console.log(this.uPass);
    
    return await bcrypt.compare(password, this.uPass);
};

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign({ id: this._id }, constants.JWT_SECRET, {
        expiresIn: constants.JWT_EXPIRY,
    });
};

const User = mongoose.model("User", userSchema);

export default User;

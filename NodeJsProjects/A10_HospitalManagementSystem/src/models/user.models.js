import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import constants from "../constants.js";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "User Name is require"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            require: [true, "Password is required"],
            select: false, // secure option: don't return password by default
        },
        role: {
            type: String,
            enum: ["ADMIN", "PATIENT", "DOCTOR", "NURSE"],
            default: "PATIENT",
        },
    },
    { timestamps: true }
);

// it's a pre-defined mongoDB hook that will run automatically when save()
// function has been called in user.controllers.js
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (password) {
    console.log(this.password);
    
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign({ id: this._id }, constants.JWT_SECRET, {
        expiresIn: constants.JWT_EXPIRY,
    });
};

const User = mongoose.model("User", userSchema);

export default User;

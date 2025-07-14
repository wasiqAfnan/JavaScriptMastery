import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        uName: {
            type: String,
            required: [true, "Name is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },
        uEmail: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
        },
        uPass: {
            type: String,
            require: [true, "Password is required"],
        },
        uRole: {
            type: String,
            enum: ["ADMIN", "USER"],
            default: "USER",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

userSchema.pre("save", async function (next) {
    if (!this.isModified("uPass")) {
        return next();
    }

    this.uPass = await bcrypt.hash(this.uPass, 10);
});

export default User;

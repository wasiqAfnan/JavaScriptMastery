import mongoose from "mongoose";

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
        uRoles: {
            type: String,
            enum: ["ADMIN", "USER"],
            default: "USER",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
            require: [true, "Password is require"],
        },
        uRole: {
            type: String,
            enum: ["ADMIN", "USER"],
            default: "USER",
        },
    },
    { timestamps: true }
);


userSchema.pre("save", async function (next) {
    if (!this.isModified("uPass")) {
        return next();
    }

    this.uPass = await bcrypt.hash(this.uPass, 10);
    console.log("Done hashing");
    
});

const User = mongoose.model("User", userSchema);

export default User;

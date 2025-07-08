import mongoose from "mongoose";

// Schema for User
const userSchema = mongoose.Schema({
    uName: {
        type: String,
        required: true,
    },
    uEmail: {
        type: String,
        required: true,
        unique: true
    },
    uAge: String
}, { timestamps: true });

// Creating model using schema
const Users = mongoose.model("Users", userSchema);

export {
    Users
}
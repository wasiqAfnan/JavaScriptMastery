import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    uName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    uEmail: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    uPass: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

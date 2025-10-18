import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["ADMIN", "DOCTOR", "NURSE", "RECEPTIONIST", "PATIENT"],
      default: "PATIENT"
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Role", roleSchema);

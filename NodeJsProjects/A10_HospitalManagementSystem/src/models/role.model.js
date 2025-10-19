import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["ADMIN", "DOCTOR", "NURSE", "PATIENT"],
      default: "PATIENT"
    },
    
  },
  { timestamps: true }
);

export default mongoose.model("Role", roleSchema);

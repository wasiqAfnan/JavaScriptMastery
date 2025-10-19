import mongoose from "mongoose";

const recordSchema = new mongoose.Schema(
  {
    // Patient whose record this is
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Primary doctor responsible for this record
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Medical details (can have multiple medication entries)
    data: [
      {
        medication: {
          type: String,
          required: [true, "Medication name is required"],
        },
        dosage: {
          type: String,
          required: [true, "Dosage information is required"],
        },
      },
    ],

    // Patient’s current health condition
    status: {
      type: String,
      enum: ["Stable", "Critical", "Recovered", "Discharged", "Under Observation"],
      default: "Under Observation",
    },

    // Who last updated this record (doctor/nurse)
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Record", recordSchema);

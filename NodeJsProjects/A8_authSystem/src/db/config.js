import mongoose from "mongoose";

export const connectDb = async (url) => {
  return await mongoose.connect(url);
};

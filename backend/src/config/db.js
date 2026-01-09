import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/college-olx");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB error");
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    picture: {
      type: String, // Google profile image URL
    },

    enrollment: {
      type: String, // bt24cse093
      required: true,
    },

    year: {
      type: String, // 24
      required: true,
    },

    branch: {
      type: String, // CSE
      required: true,
    },

    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
    autoIndex: false, 
  }
);

userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model("User", userSchema);
User.syncIndexes();

export default User;

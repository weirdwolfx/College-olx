import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "user" },
    branch: {
      type: String,
      trim: true,
      default: ""   
    },
    year: {
      type: Number, 
      default: null
    },

    picture : {
      type: String,
      default: ""
    },
    enrollment :{
       type: String,
      default: ""
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

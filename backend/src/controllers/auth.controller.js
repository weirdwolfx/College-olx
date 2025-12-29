import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({ message: "idToken is required" });
    }

    
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name , picture } = payload;

    if(!email.endsWith("@students.vnit.ac.in")){
      console.log("Unauthorized email domain:", email);
      // later we can store this email address ... 
     return res.status(403).json({ message: "ye banda VNIT ka nahi hai" });
    }


    // Later enforce strictly
    console.log("Logged in email:", email);

  
    let user = await User.findOne({ email });
    if (!user) {
     const enrollment = email.split("@")[0];       // bt24cse093
    const year = enrollment.slice(2, 4);          // 24
    const branch = enrollment.slice(4, 7).toUpperCase(); // CSE
      user = await User.create({ name, email , picture , enrollment, year , branch});
    }

    
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

   
    res.status(200).json({
      token,
      user: {
        id: user._id,  
        name: user.name,
        email: user.email,
        role: user.role,
        branch: user.branch,
        year: user.year,
        picture: user.picture,
        enrollment: user.enrollment,
        year: user.year,
      }
    });

  } catch (error) {
    console.error("Google auth error:", error);
    res.status(401).json({ message: "Invalid Google token" });
  }
};

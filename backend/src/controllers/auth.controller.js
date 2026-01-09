import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleAuth = async (req, res) => {
  try {
    const { idToken } = req.body;

    // 1 Basic validation
    if (!idToken) {
      return res.status(400).json({
        message: "idToken is required",
      });
    }

    //  Verify Google token
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture, sub: googleId } = payload;

    console.log("Logged in email:", email);

    //  VNIT-only restriction
    if (!email.endsWith("@students.vnit.ac.in")) {
      console.log("Unauthorized email domain:", email);

      return res.status(403).json({
        code: "VNIT_ONLY",
        message: "Only VNIT students are allowed",
      });
    }

    
    // Example: bt24cse093@students.vnit.ac.in
    const enrollment = email.split("@")[0]; // bt24cse093
    const year = enrollment.slice(2, 4);    // 24
    const branch = enrollment.slice(4, 7).toUpperCase(); // CSE


    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        googleId,
        name,
        email,
        picture,
        enrollment,
        year,
        branch,
      });
    }

    //  Create JWT
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 7️ Send response
    return res.status(200).json({
      token,
      user: {
        id: user._id,  
        name: user.name,
        email: user.email,
        role: user.role,
        branch: user.branch,
        year: user.year,
        enrollment: user.enrollment,
        picture: user.picture,
      },
    });

  } catch (error) {
    console.error("Google auth error:", error);

    return res.status(401).json({
      message: "Invalid Google token",
    });
  }
};




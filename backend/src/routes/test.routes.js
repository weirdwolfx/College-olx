import express from "express";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/protected", protect, (req, res) => {
  res.json({
    message: "You are authorized",
    userId: req.userId
  });
});

export default router;

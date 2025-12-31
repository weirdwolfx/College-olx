import express from "express";
import { createListing, getAllListings, getMyListings } from "../controllers/listing.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { upload } from "../config/cloudinary.js"; // New import

const router = express.Router();

// Publicly accessible listings
router.get("/", getAllListings);

// Protected: Upload up to 5 images per listing
router.post("/createListing", protect, upload.array("images", 5), createListing); 

router.get("/me", protect, getMyListings);

export default router;
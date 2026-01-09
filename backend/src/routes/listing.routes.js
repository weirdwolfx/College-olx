import express from "express";
import { createListing, getAllListings, getListingById, getMyListings, updateListing, deleteListing } from "../controllers/listing.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { upload } from "../config/cloudinary.js"; // New import

const router = express.Router();

// Publicly accessible listings
router.get("/", getAllListings);
router.get("/me", protect, getMyListings);

router.post("/createListing", protect, upload.fields([
  { name: "images", maxCount: 5 },
  { name: "title" },
  { name: "price" },
  { name: "description" },
  { name: "category" }
]), createListing); 

router.patch("/:id", protect, upload.fields([
  { name: "images", maxCount: 5 },
  { name: "title" },
  { name: "price" },
  { name: "description" },
  { name: "category" }
]), updateListing);

router.delete("/:id", protect, deleteListing);

router.get("/:id", getListingById);

export default router;
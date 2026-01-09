import express from "express";
import {
  createListing,
  getAllListings,
  getListingById,
  getMyListings,
  updateListing,
  deleteListing,
} from "../controllers/listing.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { upload } from "../config/cloudinary.js"; // New import

const router = express.Router();

// Publicly accessible listings
router.get("/", getAllListings);

router.post(
  "/createListing",
  protect,
  upload.array("images", 5),
  createListing
);
router.get("/:id", getListingById);
router.get("/me", protect, getMyListings);
router.patch("/:id", protect, upload.array("images", 5), updateListing);
router.delete("/:id", protect, deleteListing);

export default router;

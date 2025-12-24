import express from "express";
import {
  createListing,
  getAllListings,
  getMyListings
} from "../controllers/listing.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

// later after discussing , we remove this pvt on get all listings
router.get("/", protect, getAllListings);

// Protected
router.post("/", protect, createListing);
router.get("/me", protect, getMyListings);

export default router;
 
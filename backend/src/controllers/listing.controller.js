import Listing from "../models/Listing.js";


export const createListing = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    if (!title || !description || !price || !category) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const listing = await Listing.create({
      title,
      description,
      price,
      category,
      seller: req.userId  
    });

    res.status(201).json(listing);
  } catch (error) {
    console.error("Create listing error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find()
      .populate("seller", "name email")
      .sort({ createdAt: -1 });

    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


export const getMyListings = async (req, res) => {
  try {
    const listings = await Listing.find({ seller: req.userId })
      .sort({ createdAt: -1 });

    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

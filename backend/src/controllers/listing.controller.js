import Listing from "../models/Listing.js";


export const createListing = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    // Get URLs of uploaded files from Cloudinary
    const images = req.files?.images ? req.files.images.map(file => file.path) : [];

    if (!title || !description || !price || !category || images.length === 0) {
      return res.status(400).json({ message: "All fields including images are required" });
    }

    const listing = await Listing.create({
      title,
      description,
      price,
      category,
      images, // Store the array of Cloudinary URLs
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
    console.log("Getting listings for user:", req.userId);
    const listings = await Listing.find({ seller: req.userId })
      .sort({ createdAt: -1 });

    res.json(listings);
  } catch (error) {
    console.error("getMyListings error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id)
      .populate("seller", "name email");
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateListing = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, category } = req.body;

    // Find listing and verify ownership
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.seller.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized to update this listing" });
    }

    // Handle new images if uploaded
    let images = listing.images;
    if (req.files?.images) {
      images = req.files.images.map(file => file.path);
    }

    const updatedListing = await Listing.findByIdAndUpdate(
      id,
      { title, description, price, category, images },
      { new: true }
    );

    res.json(updatedListing);
  } catch (error) {
    console.error("updateListing error:", error.message);
    res.status(500).json({ message: error.message });
  }
};

export const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;

    // Find listing and verify ownership
    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.seller.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized to delete this listing" });
    }

    await Listing.findByIdAndDelete(id);

    res.json({ message: "Listing deleted successfully" });
  } catch (error) {
    console.error("deleteListing error:", error.message);
    res.status(500).json({ message: error.message });
  }
};
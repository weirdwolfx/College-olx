import Listing from "../models/Listing.js";

export const createListing = async (req, res) => {
  try {
    const { title, description, price, category } = req.body;

    // Get URLs of uploaded files from Cloudinary
    const images = req.files ? req.files.map((file) => file.path) : [];

    if (!title || !description || !price || !category || images.length === 0) {
      return res
        .status(400)
        .json({ message: "All fields including images are required" });
    }

    const listing = await Listing.create({
      title,
      description,
      price,
      category,
      images, // Store the array of Cloudinary URLs
      seller: req.userId,
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
    const listings = await Listing.find({ seller: req.userId }).sort({
      createdAt: -1,
    });

    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate(
      "seller",
      "name email"
    );
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
    const { title, description, price, category, existingImages } = req.body;

    const listing = await Listing.findById(id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.seller.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (title) listing.title = title;
    if (description) listing.description = description;
    if (price) listing.price = price;
    if (category) listing.category = category;

    // combining both newly added and kept images
    let finalImages = [];

    // keep images that user did not remove
    if (existingImages) {
      finalImages = JSON.parse(existingImages); // array of URLs
    }

    // add newly uploaded images
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map((file) => file.path);
      finalImages.push(...newImages);
    }

    listing.images = finalImages;

    const updatedListing = await listing.save();
    res.json(updatedListing);
  } catch (error) {
    console.error("Update listing error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteListing = async (req, res) => {
  try {
    const { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (listing.seller.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await listing.deleteOne();

    res.json({ message: "Listing deleted successfully" });
  } catch (error) {
    console.error("Delete listing error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

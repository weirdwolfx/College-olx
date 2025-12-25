import React, { useState } from "react";
import { Camera, Plus, X, ChevronDown } from "lucide-react";

export default function Seller() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState({});
  const [categoryOpen, setCategoryOpen] = useState(false);

  const MAX_DESC_CHARS = 450;
  const MAX_IMAGES = 5;

  const categories = [
    "Stationary",
    "Electronics",
    "Furniture",
    "Accessories",
    "devendra",
  ];

  /* ---------- IMAGE UPLOAD ---------- */
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (images.length + files.length > MAX_IMAGES) {
      setErrors(prev => ({ ...prev, images: `Maximum ${MAX_IMAGES} images allowed` }));
      return;
    }

    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages(prev => [...prev, ...newImages]);
    setErrors(prev => ({ ...prev, images: "" }));
  };

  const removeImage = (index) => {
    const updated = images.filter((_, i) => i !== index);
    setImages(updated);

    if (updated.length === 0) {
      setErrors(prev => ({ ...prev, images: "At least 1 image is required" }));
    }
  };

  /* ---------- VALIDATION ---------- */
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Product title is required";
    if (!price || price <= 0) newErrors.price = "Enter a valid price";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!category) newErrors.category = "Please select a category";
    if (images.length === 0) newErrors.images = "At least 1 image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------- SUBMIT ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert(" Product validated & ready to save to DB");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-5xl border-2 border-black rounded-2xl p-6 md:p-10"
      >
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10">

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* TITLE */}
            <div>
              <input
                type="text"
                placeholder="Product Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full py-3 text-3xl font-bold border-b-2 outline-none
                ${errors.title ? "border-red-500" : "focus:border-black"}`}
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            {/* PRICE */}
            <div>
              <div className={`flex items-center border-b-2 ${errors.price ? "border-red-500" : "focus-within:border-black"}`}>
                <span className="text-2xl font-semibold mr-2">₹</span>
                <input
                  type="number"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full py-3 text-xl outline-none"
                />
              </div>
              {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="text-sm font-semibold">Description</label>
              <textarea
                maxLength={MAX_DESC_CHARS}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={`w-full p-4 border-2 rounded-lg min-h-[140px] resize-none outline-none
                ${errors.description ? "border-red-500" : "focus:border-black"}`}
              />
              <div className="flex justify-between text-xs">
                <span className="text-red-500">{errors.description}</span>
                <span className="text-gray-400">{description.length}/{MAX_DESC_CHARS}</span>
              </div>
            </div>

            {/* MODERN CATEGORY DROPDOWN */}
            <div>
              <label className="text-sm font-semibold block mb-1">Category Tag</label>

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCategoryOpen(!categoryOpen)}
                  className={`w-full p-4 rounded-xl border-2 flex justify-between items-center
                  ${errors.category ? "border-red-500" : "border-gray-300"}
                  hover:border-black transition`}
                >
                  <span className={category ? "text-black" : "text-gray-400"}>
                    {category || "Select a category"}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transition ${categoryOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {categoryOpen && (
                  <div
                    className="absolute z-20 mt-2 w-full bg-white border rounded-xl shadow-lg 
               max-h-48 overflow-y-auto"
                  >
                    {categories.map((item) => (
                      <div
                        key={item}
                        onClick={() => {
                          setCategory(item);
                          setCategoryOpen(false);
                          setErrors(prev => ({ ...prev, category: "" }));
                        }}
                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

          </div>

          {/* LEFT SIDE → IMAGES */}
          <div className="flex flex-col gap-5">

            <label className={`relative w-full aspect-[4/3] flex items-center justify-center
            border-2 border-dashed rounded-xl cursor-pointer overflow-hidden
            ${errors.images ? "border-red-500" : ""}`}>

              {images.length > 0 ? (
                <>
                  <img src={images[0].preview} className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(0)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full"
                  >
                    <X size={16} />
                  </button>
                </>
              ) : (
                <>
                  <Camera size={40} className="text-gray-300" />
                  <span className="text-sm text-gray-500">Add Main Photo</span>
                </>
              )}

              {images.length === 0 && (
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              )}
            </label>

            {errors.images && <p className="text-red-500 text-sm">{errors.images}</p>}

            <div className="flex gap-3 flex-wrap">
              {images.slice(1).map((img, idx) => (
                <div key={idx} className="relative w-20 h-20 border rounded-lg overflow-hidden">
                  <img src={img.preview} className="w-full h-full object-cover" />
                  <div
                    onClick={() => removeImage(idx + 1)}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center text-white cursor-pointer"
                  >
                    <X size={20} />
                  </div>
                </div>
              ))}

              {images.length < MAX_IMAGES && (
                <label className="w-20 h-20 border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer">
                  <Plus size={24} />
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
              )}
            </div>

          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-black text-white py-4 rounded-lg text-lg font-semibold"
        >
          Post Product
        </button>
      </form>
    </div>
  );
}

import { useState } from "react";
import { Camera, Plus, X, ChevronDown } from "lucide-react";
import API from "../api/index"; // Import your axios instance
export default function Seller() {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("None")
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
    ];

    /* ---------- IMAGE UPLOAD ---------- */
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);

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

  /* ---------- SUBMIT ---------- */
const handleSubmit = async (formData) => {
    const title = formData.get("name");
    const price = formData.get("price");
    const description = formData.get("description");

    // Validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Product title is required";
    if (!price) newErrors.price = "Enter a valid price";
    if (images.length === 0) newErrors.images = "At least 1 image is required";
    if (category === "None") newErrors.category = "Please select a category";

    if (Object.keys(newErrors).length !== 0) {
        setErrors(newErrors);
        return;
    }

    // Create Multipart FormData
    const data = new FormData();
    data.append("title", title);
    data.append("price", price);
    data.append("description", description);
    data.append("category", category);

    // Append actual file objects from state
    images.forEach((imgObj) => {
        data.append("images", imgObj.file);
    });

    setImages([]);

    try {
        const response = await API.post("/api/listings/createListing", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Product posted successfully!");
        // Optional: Redirect to browse or clear form
    } catch (err) {
        console.error("Upload error:", err);
        alert(err.response?.data?.message || "Failed to post product");
    }
};

    return (
        <form
            action={handleSubmit}
            className="bg-white w-full xl:w-4xl lg:w-3xl drop-shadow-md rounded-xl p-6 md:px-8 
            md:pt-10 md:pb-6"
        >
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 mt-4 md:mt-0">

                {/* RIGHT SIDE */}
                <div className="flex flex-col gap-6">

                    {/* TITLE */}
                    <div className="relative mb-2 flex flex-col gap-1">
                        <input
                            id="name"
                            type="text"
                            placeholder=" "
                            name="name" aria-required
                            onChange={(e) => {
                                if (e.target.value.trim()) {
                                    setErrors((prevError) => ({ ...prevError, title: "" }))
                                }
                            }}
                            className={`peer w-full text-xl font-semibold border-b-2 outline-none
                                ${errors.title ? "border-red-500" : "focus:border-black"}`}
                        />
                        <label htmlFor="name"
                            className="absolute left-0 -top-5 transition-all cursor-text duration-200 text-sm peer-focus:-top-5 peer-focus:text-sm peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl text-neutral-500"
                        >
                            Product Name(*)
                        </label>
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>

                    {/* PRICE */}
                    <div className="flex flex-col gap-1">
                        <div className={`flex relative items-center border-b-2 ${errors.price ? "border-red-500" : "focus-within:border-black"}`}>
                            <span className="text-2xl font-semibold mr-2">&#x20B9;</span>
                            <input
                                id="price"
                                type="number"
                                placeholder=" "
                                name="price"
                                min={0}
                                max={1000000}
                                className="peer w-full font-semibold pb-0 pt-0 text-lg outline-none"
                                onChange={(e) => {
                                    if (e.target.value.trim()) {
                                        setErrors((prevError) => ({ ...prevError, price: "" }))
                                    }
                                }}
                            />
                            <label htmlFor="price" aria-required
                                className="absolute left-0 -top-5 transition-all cursor-text duration-200 text-sm peer-focus:-top-5 peer-focus:left-0 peer-focus:text-sm peer-placeholder-shown:top-0.5 peer-placeholder-shown:text-xl peer-placeholder-shown:left-6 text-neutral-500"
                            >
                                Product Price(*)
                            </label>
                        </div>
                        {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <label htmlFor="description" className="text-sm font-semibold">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Write something about your product..."
                            onChange={(e) => setDescription(e.target.value)}
                            maxLength={MAX_DESC_CHARS}
                            className="w-full py-1.5 px-2 border-2 rounded-lg min-h-35 resize-none outline-none
                                focus:border-black"
                        />
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">{description.length}/{MAX_DESC_CHARS}</span>
                        </div>
                    </div>

                    {/* MODERN CATEGORY DROPDOWN */}
                    <div>
                        <label htmlFor="category" className="text-sm font-semibold block mb-1">Category Tag</label>
                        <input id="category" type="hidden" name="category" value={category} />

                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setCategoryOpen(!categoryOpen)}
                                className="w-full p-2.5 rounded-xl border-2 flex justify-between items-center
                                border-gray-300 hover:border-black transition"
                            >
                                <span className={category ? "text-black" : "text-gray-400"}>
                                    {category}
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
                                        <button
                                            key={item}
                                            onClick={() => {
                                                setCategory(item);
                                                setCategoryOpen(false);
                                            }}
                                            className="px-4 w-full py-3 text-left hover:bg-gray-100 cursor-pointer"
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>

                </div>

                {/* LEFT SIDE → IMAGES */}
                <div className="flex flex-col gap-5">
                    {images.length > 0 ? (
                        <div className="relative aspect-4/3 flex w-full items-center justify-center border-2 border-dashed rounded-xl cursor-pointer overflow-hidden">
                            <img src={images[0].preview} className="object-contain" />
                            <button
                                type="button"
                                onClick={() => removeImage(0)}
                                className="absolute top-3 right-3 bg-white p-2 rounded-full"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ) : (
                        <>
                            <input name="image" id="thumbnail" type="file" accept="image/*" onChange={handleImageUpload} className="peer sr-only" multiple aria-required />
                            <label htmlFor="thumbnail" className={`relative aspect-4/3 flex w-full items-center justify-center border-2 border-dashed rounded-xl cursor-pointer overflow-hidden peer-focus-visible:border-amber-600 ${errors.images ? "border-red-500" : ""}`}>
                                <Camera size={40} className="text-gray-300" />
                                <span className="text-sm text-gray-500">Add Product Thumbnail (*)</span>
                            </label>
                        </>
                    )}

                    {errors.images && <p className="text-red-500 -mt-3.5 -mb-1.5 text-sm">{errors.images}</p>}

                    <div className="self-center flex gap-3 flex-wrap">
                        {images.slice(1).map((img, idx) => (
                            <div key={idx} className="relative w-18 h-18 xl:w-20 xl:h-20 border rounded-lg overflow-hidden">
                                <img src={img.preview} className="w-full h-full object-cover" />
                                <button
                                    onClick={() => removeImage(idx + 1)}
                                    className="absolute inset-0 bg-black/50 flex items-center justify-center text-white cursor-pointer"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        ))}

                        {images.length < MAX_IMAGES && (
                            <>
                                <input name="image" type="file" id="add-img" accept="image/*" onChange={handleImageUpload} className="peer sr-only" multiple />
                                <label htmlFor="add-img" className="w-18 h-18 xl:w-20 xl:h-20 border-2 border-dashed peer-focus-visible:border-amber-600 rounded-lg flex items-center justify-center cursor-pointer">
                                    <Plus size={24} />
                                </label>
                            </>
                        )}
                    </div>

                </div>
            </div>

            <button
                type="submit"
                className="mt-6 w-full bg-black text-white py-2.5 rounded-lg text-lg font-semibold"
            >
                Post Product
            </button>
        </form>
    );
}

import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import MobileSwiperImages from "./MobileSwiperImages";

const ProductDetail = ({ product }) => {
    // 1. Initialize state with null safety
    const [activeImage, setActiveImage] = useState(product?.images?.[0] || "");

    // 2. Sync activeImage if product changes (important for first fetch)
    useEffect(() => {
        if (product?.images?.length > 0) {
            setActiveImage(product.images[0]);
        }
    }, [product]);

    // 3. Return null or a skeleton if product is missing
    if (!product) return <div className="p-10 text-center">Loading product details...</div>;

    // Helper to format date from MongoDB createdAt
    const formattedDate = product.createdAt 
        ? new Date(product.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
        : "N/A";

    return (
        <section className="max-w-4xl bg-white rounded-lg md:rounded-xl drop-shadow-md md:py-7 md:px-2.5">
            {/* Mobile Seller info */}
            <div className="md:hidden px-4 pt-4 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                    <img
                        src={product.seller?.picture || "https://via.placeholder.com/150"}
                        alt="user"
                        className="w-8 h-8 rounded-full border object-cover"
                    />
                    <span>{product.seller?.name || "Anonymous"}</span>
                </div>
                <span>{formattedDate}</span>
            </div>

            {/* Mobile images */}
            <div className="md:hidden mt-4">
                {/* Use optional chaining for images */}
                <MobileSwiperImages images={product.images || []} />
            </div>

            {/* DESKTOP CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                {/* Desktop Images */}
                <div className="hidden md:block">
                    <div className="w-full h-80 flex items-center justify-center overflow-hidden rounded-lg border-2 bg-gray-100">
                        <img
                            src={activeImage}
                            alt="product"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="mt-4 flex justify-center gap-3 flex-wrap">
                        {product.images?.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt="thumbnail"
                                onClick={() => setActiveImage(img)}
                                className={`w-16 h-16 object-cover rounded-md cursor-pointer border
                                    ${activeImage === img ? "border-black border-2" : "border-gray-300"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Info (mobile + desktop) */}
                <div className="flex flex-col gap-1.5">
                    {/* Desktop Seller info */}
                    <div className="hidden md:flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-1.5">
                            <img
                                src={product.seller?.picture || "https://via.placeholder.com/150"}
                                alt="user"
                                className="w-7 h-7 rounded-full border object-cover"
                            />
                            <span>{product.seller?.name || "Anonymous"}</span>
                        </div>
                        <span>{formattedDate}</span>
                    </div>

                    <div className="mt-2 md:mt-0">
                        <h1 className="text-xl mb-1 md:text-2xl font-semibold">{product.title}</h1>
                        <p className="text-lg md:text-[22px] font-bold text-orange-600">
                            &#x20B9; {product.price?.toLocaleString('en-IN')}
                        </p>
                    </div>

                    <div className="md:h-42 md:overflow-y-auto">
                        <h2 className="font-medium mb-1">Description</h2>
                        <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                            {product.description}
                        </p>
                    </div>

                    <div className="mt-auto pt-4">
                        <h2 className="font-medium mb-2">Category</h2>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 text-xs font-semibold border-2 border-black rounded-full uppercase">
                                {product.category}
                            </span>
                        </div>
                    </div>

                    {/* Desktop button */}
                    <div className="hidden md:block mt-2.5">
                        <Link to="/message" className="block w-full text-center bg-black text-white py-2 rounded-lg cursor-pointer">
                            Message Seller
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile button (fixed) */}
            <div className="md:hidden sticky bottom-1 p-2 mt-3">
                <Link to="/message" className="block w-full text-center bg-black text-white py-3 rounded-lg">
                    Message Seller
                </Link>
            </div>
        </section>
    );
};

export default ProductDetail;
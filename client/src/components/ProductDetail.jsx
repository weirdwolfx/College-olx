import { useState } from "react";
import MobileSwiperImages from "./MobileSwiperImages";

const ProductDetail = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <section className="max-w-6xl mx-auto bg-white md:rounded-xl md:border-3 pb-24 md:pb-6">
      {/* Mobile Seller info */}
      <div className="md:hidden px-4 pt-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <img
            src={product.sellerImage}
            alt="user"
            className="w-8 h-8 rounded-full border"
          />
          <span>{product.seller}</span>
        </div>
        <span>{product.date}</span>
      </div>

      {/* Mobile images */}
      <div className="md:hidden mt-4">
        <MobileSwiperImages images={product.images} />
      </div>

      {/* DESKTOP */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6 mt-6">
        {/* Desktop Images */}
        <div className="hidden md:block">
          <div className="w-full h-87.5 flex items-center justify-center rounded-lg border bg-gray-100">
            <img
              src={activeImage}
              alt="product"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mt-4 flex justify-center gap-3">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="thumbnail"
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 object-contain rounded-md cursor-pointer border
                  ${
                    activeImage === img
                      ? "border-black border-2"
                      : "border-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Info (mobile + desktop) */}
        <div className="space-y-4">
          {/* Desktop Seller info */}
          <div className="hidden md:flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <img
                src={product.sellerImage}
                alt="user"
                className="w-8 h-8 rounded-full border"
              />
              <span>{product.seller}</span>
            </div>
            <span>{product.date}</span>
          </div>

          <h1 className="text-xl md:text-2xl font-semibold">{product.title}</h1>

          <p className="text-lg md:text-xl font-bold">₹ {product.price}</p>

          <div className="md:h-42 md:overflow-y-auto">
            <h2 className="font-medium mb-1">Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          <div>
            <h2 className="font-medium mb-2">Tags</h2>
            <div className="flex gap-2 flex-wrap">
              {product.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm border rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Desktop button */}
          <div className="hidden md:block mt-6">
            <button className="w-full bg-black text-white py-3 rounded-lg cursor-pointer">
              Message Seller
            </button>
          </div>
        </div>
      </div>

      {/* Mobile button (fixed) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-2">
        <button className="w-full bg-black text-white py-3 rounded-lg">
          Message Seller
        </button>
      </div>
    </section>
  );
};

export default ProductDetail;

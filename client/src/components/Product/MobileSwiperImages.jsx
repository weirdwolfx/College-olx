import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const MobileSwiperImages = ({ images }) => {
    return (
        <div className="w-full overflow-hidden">
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                spaceBetween={16}
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="max-w-full h-70 flex items-center justify-center bg-gray-100">
                            <img
                                src={img}
                                alt={`product-${idx}`}
                                className=" object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MobileSwiperImages;

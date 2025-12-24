import { Link } from "react-router-dom"

import ProductDetail from "../components/ProductDetail"
import Header from "../components/Header"
import sampleProduct from "../assets/data"

export default function Product() {
    return (
        <>
            <Header />
            <main className="py-3 md:py-6 px-4 md:px-16 lg:px-20 2xl:px-80 h-screen md:flex md:flex-col md:items-center md:gap-5 md:justify-start bg-gray-100">
                <div className="flex flex-col gap-3 md:gap-5">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-white rounded-full p-0.5 drop-shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                        </div>
                        <p className="text-lg font-semibold">Back to Browse</p>
                    </Link>
                    <ProductDetail product={sampleProduct} />
                </div>
            </main>
        </>
    )
}
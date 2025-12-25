import ProductDetail from "../components/ProductDetail"
import Header from "../components/Header"
import BackButton from "../components/BackButton"
import sampleProduct from "../assets/data"

export default function Product() {
    return (
        <>
            <Header />
            <main className="py-3 md:py-6 px-4 md:px-16 lg:px-20 2xl:px-80 h-screen md:flex md:flex-col md:items-center md:gap-5 md:justify-start bg-gray-100">
                <div className="flex flex-col gap-3 md:gap-5">
                    <BackButton />
                    <ProductDetail product={sampleProduct} />
                </div>
            </main>
        </>
    )
}
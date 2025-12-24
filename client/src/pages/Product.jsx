import ProductDetail from "../components/ProductDetail"
import Header from "../components/Header"
import sampleProduct from "../assets/data"

export default function Product() {
    return (
        <>
            <Header />
            <main>
                <ProductDetail product={sampleProduct} />
            </main>
        </>
    )
}
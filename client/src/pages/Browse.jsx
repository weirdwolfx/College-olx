import React from "react"
import Header from "../components/Header"
import Card from "../components/Card"
import Categories from "../components/Categories"
import API from "../api/index"

export default function Browse() {
    const [products, setProducts] = React.useState([]) 
    const [category, setCategory] = React.useState("all")
    const [loading, setLoading] = React.useState(true)

    // 1. Fetch products only once when the component mounts
    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await API.get("/api/listings") 
                setProducts(res.data)
            } catch (err) {
                console.error("Failed to fetch products:", err)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

 const filteredProducts = products.filter((product) => {
    // 1. Agar "All" selected hai toh saare dikhao
    if (category === "all") return true;

    // 2. Null checks (taki crash na ho)
    if (!product.category) return false;

    // 3. Compare by converting both to lowercase and removing extra spaces
    return product.category.toLowerCase().trim() === category;
});

    return (
        <>
            <Header />
            <main className="py-3 sm:py-10 px-4 md:px-16 lg:px-20 2xl:px-48 bg-gray-100 min-h-screen">
                <Categories category={category} setCategory={setCategory} />
                
                {loading ? (
                    <p className="text-center py-10">Loading items...</p>
                ) : (
                    <>
                        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                            {filteredProducts.map((product) => (
                                <Card key={product._id} product={product} />
                            ))}
                        </section>

                        {filteredProducts.length === 0 && (
                            <p className="text-center mt-10 text-gray-500">
                                No products found in the "{category}" category.
                            </p>
                        )}
                    </>
                )}
            </main>
        </> 
    )
}
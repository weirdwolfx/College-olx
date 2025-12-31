import React from "react"
import Header from "../components/Header"
import Card from "../components/Card"
import Categories from "../components/Categories"
import API from "../api/index" // Import your axios instance

export default function Browse() {
    const [products, setProducts] = React.useState([]) // Initialize as empty array
    const [category, setCategory] = React.useState("all")
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch from your actual backend endpoint
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

    // Filter products based on selected category
    const filteredProducts = category === "all" 
        ? products 
        : products.filter(p => p.category === category)

    return (
        <>
            <Header />
            <main className="py-3 sm:py-10 px-4 md:px-16 lg:px-20 2xl:px-48 bg-gray-100">
                <Categories category={category} setCategory={setCategory} />
                
                {loading ? (
                    <p>Loading items...</p>
                ) : (
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                        {filteredProducts.map((product) => (
                            <Card key={product._id} product={product} />
                        ))}
                    </section>
                )}
                
                {!loading && filteredProducts.length === 0 && (
                    <p className="text-center mt-10">No products found in this category.</p>
                )}
            </main>
        </> 
    )
}
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductDetail from "../components/ProductDetail"
import Header from "../components/Header"
import BackButton from "../components/BackButton"
import API from "../api/index" // Import your axios instance

export default function Product() {
    const { id } = useParams(); // This matches the :id in your Route path
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await API.get(`/api/listings/${id}`);
                setProduct(res.data);
            } catch (err) {
                console.error("Error fetching product details:", err);
            } finally {
                setLoading(false);
            }
        };

        if (id) getProduct();
    }, [id]);

    return (
        <>
            <Header />
            <main className="py-3 md:py-6 px-4 md:px-16 lg:px-20 2xl:px-80 min-h-screen md:flex md:flex-col md:items-center md:gap-5 md:justify-start bg-gray-100">
                <div className="flex flex-col gap-3 md:gap-5 w-full">
                    <BackButton />
                    
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <p className="text-gray-500 font-semibold">Loading product details...</p>
                        </div>
                    ) : product ? (
                        <ProductDetail product={product} />
                    ) : (
                        <div className="text-center py-20">
                            <h2 className="text-2xl font-bold">Product not found</h2>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}
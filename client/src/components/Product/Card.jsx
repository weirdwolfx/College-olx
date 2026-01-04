import { Link } from "react-router-dom"

export default function Card({ product }) {
    // Format the date from the timestamp
    const date = new Date(product.createdAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });

    return (
        <section className="shadow-sm rounded-xl py-4 px-3.5 drop-shadow-md flex flex-col gap-2.5 bg-white">
            <div className="flex justify-between items-center mb-1.5">
                <div className="flex gap-1.5 items-center">
                    <div className="rounded-full w-6 h-6 overflow-hidden bg-orange-400">
                        <img
                            src={product.seller?.picture || "https://via.placeholder.com/150"}
                            alt="seller profile"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <p className="text-sm font-medium">{product.seller?.name || "User"}</p>
                </div>
                <p className="text-xs text-gray-500">{date}</p>
            </div>

            <img
                src={product.images?.[0] || "https://via.placeholder.com/300"}
                alt={product.title}
                className="rounded-md h-48 w-full object-cover"
            />

            <div className="pl-1 mb-2.5">
                <h1 className="text-lg font-semibold truncate">{product.title}</h1>
                <h2 className="font-bold text-2xl tracking-tight">
                    &#x20B9; {product.price?.toLocaleString('en-IN')}
                </h2>
            </div>

            <div className="flex gap-2.5 mt-auto">
                <Link
                    to={`/product/${product._id}`}
                    className="w-full text-sm font-semibold border-2 bg-white py-1 px-1.5 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                    View Product
                </Link>
                <Link
                    to={`/message/${product.seller?._id}`}
                    className="w-full text-sm font-semibold border-2 bg-white py-1 px-1.5 rounded-lg text-center hover:bg-gray-50 transition-colors"
                >
                    Message Seller
                </Link>
            </div>
        </section>
    )
}
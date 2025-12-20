export default function Card() {
    return (
        <section className="shadow-sm w-max rounded-xl py-5 px-3 bg-blue-200">
            <div>
            </div>
            <img 
                src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="dog image"
                className="w-75 rounded-md" 
            />
            <h1>Product Name</h1>
            <h2>Product Price</h2>
            <div className="flex justify-around">
                <button>
                    <a 
                        href="/view" 
                        className="bg-black text-xs text-gray-100 py-1.5 px-3 rounded-full"
                    >
                        View Product
                    </a>
                </button>
                <button>
                    <a 
                        href="/message" 
                        className="bg-black text-xs text-gray-100 py-1.5 px-3 rounded-full"
                    >
                        Message Seller
                    </a>
                </button>
            </div>
        </section>
    )
}

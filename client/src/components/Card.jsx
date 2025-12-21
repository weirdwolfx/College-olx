export default function Card() {
    return (
        <section className="shadow-sm rounded-xl py-5 px-3.5 border-2">
            <div className="flex justify-between">
                <div className="flex">
                    <div className="rounded-full w-8 h-8 overflow-hidden bg-orange-400">
                        <img 
                            src="https://www.shutterstock.com/image-photo/side-profile-happy-golden-retriever-600nw-2476395703.jpg" 
                            alt="profile picture"
                            className="h-8 object-cover"
                        />
                    </div>
                    <p>JohnDoe</p>
                </div>
                <p>07 Jan, 2025</p>
            </div>
            <img 
                src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="dog image"
                className=" rounded-md" 
            />
            <h1>Product Name</h1>
            <h2>Product Price</h2>
            <div className="flex gap-2.5">
                <button className="w-full border-2 bg-white py-1 px-1.5 rounded-lg">
                    <a 
                        href="/view" 
                    >
                        View Product
                    </a>
                </button>
                <button className="w-full border-2 bg-white py-1 px-1.5 rounded-md">
                    <a 
                        href="/message"
                    >
                        Message Seller
                    </a>
                </button>
            </div>
        </section>
    )
}

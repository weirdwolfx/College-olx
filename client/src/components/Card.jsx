import { Link } from "react-router-dom"

export default function Card() {
    return (
        <section className="shadow-sm rounded-xl py-4 px-3.5 border-2 flex flex-col gap-2.5">
            <div className="flex justify-between items-center mb-1.5">
                <div className="flex gap-1.5 items-center">
                    <div className="rounded-full w-6 h-6 overflow-hidden bg-orange-400">
                        <img 
                            src="https://www.shutterstock.com/image-photo/side-profile-happy-golden-retriever-600nw-2476395703.jpg" 
                            alt="profile picture"
                            className="h-8 object-cover"
                        />
                    </div>
                    <p>JohnDoe</p>
                </div>
                <p className="text-sm">07 Jan, 2025</p>
            </div>
            <img 
                src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="dog image"
                className=" rounded-md" 
            />
            <div className="pl-1 mb-2.5">
                <h1 className="text-lg font-semibold">ED Board</h1>
                <h2 className="font-bold text-2xl tracking-tight">&#x20B9; 1,12,200</h2>
            </div>
            <div className="flex gap-2.5">
                <Link to="/product" className="w-full text-sm font-semibold border-2 bg-white py-1 px-1.5 rounded-lg text-center">
                    View Product
                </Link>
                <Link to="/message" className="w-full text-sm font-semibold border-2 bg-white py-1 px-1.5 rounded-md text-center">
                    Message Seller
                </Link>
            </div>
        </section>
    )
}

export default function Header() {
    return (
        <header className="flex justify-between py-4 px-6 shadow-sm">
            <div>
                <label htmlFor="product-search-query" className="sr-only"></label>
                <input 
                    type="text" 
                    name="product-search-query" 
                    id="product-search-query"
                    placeholder="Search" 
                    className="border border-gray-400 px-3 py-1 text-sm rounded-2xl"
                />
            </div>
            <nav className="flex gap-2 items-center">
                <button>
                    <a href="/">Inbox</a>
                </button>
                <button>
                    <a href="/sell" className="bg-black text-white py-1 px-2 rounded-full">Sell</a>
                </button>
            </nav>
        </header>
    )
}

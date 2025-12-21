export default function Header() {
    return (
        <header className="flex justify-between py-5 px-6 shadow-sm">
            <h1>Logo</h1>
            <div className="flex border border-gray-400 px-3 py-1 text-sm rounded-2xl w-1/3">
                <input 
                    type="text" 
                    name="product-search-query" 
                    id="product-search-query"
                    placeholder="Search"
                    className="w-full focus:outline-0"
                />
                <label htmlFor="product-search-query">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                </label>
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

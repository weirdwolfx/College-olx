import React from "react"
import { Link } from "react-router-dom"
 
export default function Header() {

    const [menuOpen, setMenuOpen] = React.useState(false)

    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            setMenuOpen(false);
        }
    }, [window.innerWidth]);

    React.useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }

        return () => document.body.classList.remove("overflow-hidden")
    }, [menuOpen])

    return (
        <header className="grid grid-cols-3 sm:flex sm:justify-between py-5 px-6 shadow-sm relative items-center min-h-20">
            <h1 className="hidden md:block">Logo</h1> 

            <button 
                onClick={() => setMenuOpen(menuOpen => !menuOpen)}
                className={`justify-self-start relative md:hidden transform transition duration-300 z-60 origin-center
                    ${menuOpen ? "rotate-180" : "rotate-0"}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                    <path d="M120-680v-80h720v80H120Zm0 480v-80h720v80H120Zm0-240v-80h720v80H120Z"/>
                </svg>
            </button>

            <div className="flex border col-span-2 border-gray-400 sm:max-w-none px-3 py-1 text-sm rounded-2xl sm:w-1/2 lg:w-2/5 xl:w-1/3 sm:absolute sm:left-1/2 sm:-translate-x-1/2 w-full sm:mr-0">
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

            <nav className={`flex gap-3 items-stretch md:gap-4 md:static md:items-center fixed bg-white top-0 bottom-0 left-0 flex-col md:flex-row px-4 md:w-max w-70 md:px-0 md:py-0 py-16 transition z-50 duration-700 ease-in-out md:transition-none md:translate-x-0 
                ${menuOpen ? "translate-x-0" : "-translate-x-full"}`
            }>
                <Link to="/inbox" className="border-b-gray-700 border-b-2 md:border-0 text-center">
                    Inbox
                </Link>
                <Link to="/sell" className="bg-black text-white py-1 px-5 rounded-full flex justify-center">
                    Sell
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" className="w-5"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                </Link>
            </nav>

            <div
                onClick={() => setMenuOpen(false)} 
                className={`fixed z-30 inset-0 bg-black transition duration-500 md:opacity-0 md:pointer-events-none
                ${menuOpen ? "opacity-40" : "opacity-0 pointer-events-none"}`}>
            </div>
        </header>
    )
}

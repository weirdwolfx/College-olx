export default function Categories({ category, setCategory }) {
    return (
        <nav className="flex gap-2.5 pb-8 pt-4" id="categories">
            <button
                onClick={() => setCategory("all")} 
                className={`border-2 rounded-lg px-3 py-0.5 cursor-pointer
                    ${(category == "all") ? "selected" : "not-selected"}`
                }
            >
                All
            </button>
            <button 
                onClick={() => setCategory("accessories")} 
                className={`border-2 rounded-lg px-3 py-0.5 cursor-pointer
                    ${(category == "accessories") ? "selected" : "not-selected"}`
                }
            >
                Accessories
            </button>
            <button 
                onClick={() => setCategory("stationary")} 
                className={`border-2 rounded-lg px-3 py-0.5 cursor-pointer
                    ${(category == "stationary") ? "selected" : "not-selected"}`
                }
            >
                Stationary
            </button>
        </nav>
    )
}

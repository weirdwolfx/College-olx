export default function Categories({ category, setCategory }) {

    const categories = ["All", "Accessories", "Stationary", "Electronics"]

    const categoryElements = categories.map((name) => {
        return (
            <button
                onClick={() => setCategory(name.toLowerCase())}
                className={`border-2 rounded-lg px-3 py-0.5 cursor-pointer
                ${(category === name.toLowerCase()) ? "selected" : "not-selected"}`
                }
            >
                {name}
            </button>
        )
    })

    return (
        <nav className="flex gap-2.5 pb-8 pt-4 flex-wrap" id="categories">
            {categoryElements}
        </nav>
    )
}

export default function Category({ category, setCategory, name }) {
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
}
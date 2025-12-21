import Category from "./Category"

export default function Categories({ category, setCategory }) {

    const categories = ["All", "Accessories", "Stationary"]
    
    const categoryElements = categories.map((name) => {
        return <Category 
            category={category} 
            setCategory={setCategory} 
            name={name} 
        />
    })

    return (
        <nav className="flex gap-2.5 pb-8 pt-4" id="categories">
            {categoryElements}
        </nav>
    )
}

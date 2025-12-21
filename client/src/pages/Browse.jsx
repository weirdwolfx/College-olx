import React from "react"

import Header from "../components/Header"
import Card from "../components/Card"
import Categories from "../components/Categories"

export default function Browse() {

    const [products, setProducts] = React.useState(null)
    const [category, setCategory] = React.useState("all")

    React.useEffect(() => {
        console.log("effect run")
        fetch("api/products")
            .then(res => console.log("request logged"))
    }, [])

    return (
        <>
            <Header />
            <main className="py-10 px-44">
                <Categories category={category} setCategory={setCategory} />
                <section className="grid grid-cols-3 gap-7">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </main>
        </> 
    )
}
import Header from "../components/Header"
import Card from "../components/Card"
import Categories from "../components/Categories"

export default function Browse() {
    return (
        <>
            <Header />
            <main className="py-10 px-44">
                <Categories />
                <section className="grid grid-cols-3 gap-7">
                    <Card />
                    <Card />
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
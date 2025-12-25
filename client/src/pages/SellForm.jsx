import Header from "../components/Header"
import Seller from "../components/sell"
import BackButton from "../components/BackButton"

export default function Form() {
    return (
        <>
            <Header />
            <main className="py-3 md:py-6 md:pb-10 px-4 md:px-16 lg:px-20 2xl:px-80 md:flex md:flex-col md:items-center md:gap-5 md:justify-start bg-gray-100">
                <div className="flex flex-col gap-3 md:gap-5">
                    <BackButton />
                    <Seller />
                </div>
            </main>
        </>
    )
}

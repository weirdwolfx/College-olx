import Header from "../components/Header"
import SellForm from "../components/SellForm"
import BackButton from "../components/BackButton"

export default function FormPage() {
    return (
        <>
            <Header />
            <main className="py-3 md:py-6 md:pb-20 px-4 sm:px-12 md:px-36 2xl:px-80 md:flex md:flex-col md:items-center md:gap-5 md:justify-start bg-gray-100">
                <div className="flex w-full lg:w-max flex-col gap-3 md:gap-5">
                    <BackButton />
                    <SellForm />
                </div>
            </main>
        </>
    )
}

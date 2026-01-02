import Header from "../components/Header"
import BackButton from "../components/BackButton"
import ChatRouter from "../components/Chat/ChatRouter"

export default function ChatPage() {
    return (
        <>
            <div className="h-svh flex flex-col overflow-hidden bg-gray-100">
                <Header />
                <div className="flex flex-1 overflow-hidden flex-col px-4 md:px-16 lg:px-20 2xl:px-68 py-3 md:py-6 gap-3 md:gap-5">
                    <BackButton />
                    <ChatRouter />
                </div> 
            </div>
        </>
    )
}
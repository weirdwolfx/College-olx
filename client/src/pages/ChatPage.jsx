import Header from "../components/Header"
import ChatRoom from "../components/Chat/ChatRoom"

export default function ChatPage() {
    return (
        <>
            <Header />
            <main className="flex justify-center">
                <ChatRoom user="bob" />
            </main>
        </>
    )
}
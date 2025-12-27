import Header from "../components/Header"
import ChatRoom from "../components/Chat/ChatRoom"

import msgs from "../assets/chat"

export default function ChatPage() {
    return (
        <>
            <Header />
            <main className="flex mx-auto flex-col gap-3 w-2xl">
                <ChatRoom user="alice" msgs={msgs['alice']} />
            </main>
        </>
    )
}
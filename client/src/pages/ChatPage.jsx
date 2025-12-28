import Header from "../components/Header"
import ChatRoom from "../components/Chat/ChatRoom"
import BackButton from "../components/BackButton"

import msgs from "../assets/chat"

export default function ChatPage() {
    return (
        <>
            <div className="h-svh flex flex-col overflow-hidden bg-gray-100">
                <Header />
                <div className="flex flex-1 overflow-hidden flex-col px-68 py-3 md:py-6 gap-3 md:gap-5">
                    <BackButton />
                    <ChatRoom user="alice" msgs={msgs['alice']} />
                </div>
            </div>
        </>
    )
}
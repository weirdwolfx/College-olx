import ChatHeader from "./ChatHeader"
import MessageBubble from "./MessageBubble"
import MessageInput from "./MessageInput"

import messages from "../../assets/chat"

export default function ChatRoom({ user }) {

    const messageElements = messages[user].map((msg) => {
        return (
            <MessageBubble 
                text={msg.text}
                sentByMe={msg.sentByMe}
            />
        )
    })

    return (
        <section className="w-2xl flex flex-col gap-1">
            {messageElements}
        </section>
    )
}
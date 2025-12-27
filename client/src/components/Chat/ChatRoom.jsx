import React from "react"

import ChatHeader from "./ChatHeader"
import MessageInput from "./MessageInput"
import MessageWindow from "./MessageWindow"

export default function ChatRoom({ user, msgs }) {

    const [messages, setMessages] = React.useState(msgs)

    return (
        <main className="flex flex-col gap-3">
            <ChatHeader user={user} />
            <MessageWindow messages={messages} />
            <MessageInput setMessages={setMessages} />
        </main>
    )
}
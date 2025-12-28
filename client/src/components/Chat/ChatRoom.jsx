import React from "react"

import ChatHeader from "./ChatHeader"
import MessageInput from "./MessageInput"
import MessageWindow from "./MessageWindow"
import Sidebar from "./ChatSidebar"

export default function ChatRoom({ user, msgs, customClass = "" }) {

    const [messages, setMessages] = React.useState(msgs)

    return (
        <div className="h-full grid-cols-4 grid rounded-xl bg-white overflow-hidden drop-shadow-lg">
            <Sidebar customClass="border-r-2 col-span-1" />

            <section className="grid grid-rows-9 min-h-0 col-span-3">
                <ChatHeader user={user} customClass="row-span-1"/>
                <MessageWindow messages={messages} customClass="row-span-7"/>
                <MessageInput setMessages={setMessages} customClass="row-span-1"/>
            </section>
        </div>
    )
}

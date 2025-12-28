import React from "react"

import ChatHeader from "./ChatHeader"
import MessageInput from "./MessageInput"
import MessageWindow from "./MessageWindow"
import Sidebar from "./ChatSidebar"

import msgs from "../../assets/chat"

export default function ChatRoom({ customClass = "" }) {

    const [user, setUser] = React.useState(null)
    const [messages, setMessages] = React.useState(msgs)

    const users = Object.keys(msgs)

    return (
        <div className="h-full grid-cols-4 grid rounded-xl bg-white overflow-hidden drop-shadow-lg">
            <Sidebar currentUser={user} users={users} setUser={setUser} customClass="border-r-2 col-span-1" />

            <section className="grid grid-rows-9 min-h-0 col-span-3">
                {user &&
                    <>
                        <ChatHeader user={user} customClass="row-span-1" />
                        <MessageWindow messages={messages[user]} customClass="row-start-2 -row-end-2" />
                        <MessageInput user={user} setMessages={setMessages} customClass="row-span-1" />
                    </>
                }
            </section>
        </div>
    )
}

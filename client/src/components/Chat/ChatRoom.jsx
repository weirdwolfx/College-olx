import { useParams } from "react-router-dom"

import ChatHeader from "./ChatHeader"
import MessageInput from "./MessageInput"
import MessageWindow from "./MessageWindow"

import msgs from "../../assets/chat"

export default function ChatRoom() {

    const { id } = useParams()

    return (
        <>
            <main className="grid grid-rows-9 h-full min-h-0 md:col-span-3">
                <ChatHeader user="Alice" customClass="row-span-1" />
                <MessageWindow messages={msgs[id]} customClass="row-start-2 -row-end-2" />
                <MessageInput customClass="row-span-1" />
            </main>
        </>
    )
}
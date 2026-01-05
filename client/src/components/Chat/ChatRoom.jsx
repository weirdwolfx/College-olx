import { useParams } from "react-router-dom"
import { useEffect } from "react"

import ChatHeader from "./ChatHeader"
import MessageInput from "./MessageInput"
import MessageWindow from "./MessageWindow"

import socket from "../../socket"

export default function ChatRoom() {

    const { id } = useParams()

    useEffect(() => {
        socket.emit('joinRoom', { id })

        return () => {
            socket.emit('leaveRoom', { id })
        }
    }, [id])

    return (
        <>
            <main className="grid grid-rows-9 h-full min-h-0 md:col-span-3">
                <ChatHeader user="Alice" customClass="row-span-1" />
                <MessageWindow customClass="row-start-2 -row-end-2" />
                <MessageInput customClass="row-span-1" />
            </main>
        </>
    )
}
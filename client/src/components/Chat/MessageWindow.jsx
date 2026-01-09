import React from "react";
import { useParams } from "react-router-dom";

import socket from "../../socket";

import MessageBubble from "./MessageBubble"

export default function MessageWindow({ customClass = "" }) {

    const { id } = useParams()
    const [messages, setMessages] = React.useState([])
    const messagesEndRef = React.useRef(null);

    const updateMessages = (newMsg) => {
        setMessages(prevMessages => [...prevMessages, newMsg])
    }

    React.useEffect(() => {
        setMessages(msgs[id])
    }, [id])

    React.useEffect(() => {
        socket.on('getMessage', updateMessages)

        return () => socket.off('getMessage', updateMessages)
    }, [id])

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    
    const messageElements = messages.map((msg) => {
        return (
            <MessageBubble
                key={msg._id}
                msg={msg}
            />
        )
    })

    return (
        <div className={`overflow-y-scroll flex flex-col gap-0.5 overflow-x- py-4 pl-3 pr-2 bg-gray-50 ${customClass}`}>
            {messageElements}

            <div ref={messagesEndRef} />
        </div>
    )
}

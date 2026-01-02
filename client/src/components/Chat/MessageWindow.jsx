import React from "react";

import MessageBubble from "./MessageBubble"

export default function MessageWindow({ messages, customClass = "" }) {

    const messagesEndRef = React.useRef(null);

    React.useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const messageElements = messages.map((msg) => {
        return (
            <MessageBubble
                key={msg.id}
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

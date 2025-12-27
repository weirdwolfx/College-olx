import MessageBubble from "./MessageBubble"

export default function MessageWindow({ messages }) {

    const messageElements = messages.map((msg) => {
        return (
            <MessageBubble 
                msg={msg}
            />
        )
    })

    return (
        <section className="flex flex-col gap-1">
            {messageElements}
        </section>
    )
}
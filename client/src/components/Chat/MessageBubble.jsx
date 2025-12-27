export default function MessageBubble({ msg }) {
    return (
        <div
            key={msg.id}
            className={`relative w-max max-w-1/2
            ${msg.sentByMe ? "self-end" : "self-start"}
        `}>
            <div className={`px-4 py-2 rounded-lg
            ${msg.sentByMe ? "bg-blue-500" : "bg-blue-100"} `}>
                <p className={`${msg.sentByMe ? "text-white" : "text-black"}`}>
                    {msg.text}
                </p>
            </div>
            <div className={`absolute bottom-2 w-0 h-0
            ${msg.sentByMe ? "-right-1.5 border-l-8 border-l-blue-500"
                    : "-left-1.5 border-r-8 border-r-blue-100"}
            border-t-8 border-t-transparent
            border-b-8 border-b-transparent`} />
        </div>
    )
}
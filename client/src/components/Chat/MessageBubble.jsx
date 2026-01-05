export default function MessageBubble({ msg }) {
    return (
        <div
            className={`relative w-max max-w-2/3
            ${msg.sender == "Bob" ? "self-end" : "self-start"}
        `}>
            <div className={`px-4 py-2 rounded-lg
            ${msg.sender == "Bob" ? "bg-blue-500" : "bg-blue-100"} `}>
                <p className={`wrap-break-word ${msg.sender == "Bob" ? "text-white" : "text-black"}`}>
                    {msg.text}
                </p>
            </div>
            <div className={`absolute bottom-2 w-0 h-0
            ${msg.sender == "Bob" ? "-right-1.5 border-l-8 border-l-blue-500"
                    : "-left-1.5 border-r-8 border-r-blue-100"}
            border-t-8 border-t-transparent
            border-b-8 border-b-transparent`} />
        </div>
    )
}
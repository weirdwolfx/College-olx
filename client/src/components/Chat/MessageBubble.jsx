export default function MessageBubble({ text, sentByMe=true }) {
    return (
        <div className={`relative w-max max-w-1/2
            ${sentByMe ? "self-end" : "self-start"}
        `}>
            <div className={`px-4 py-2 rounded-lg
                ${sentByMe ? "bg-blue-500" : "bg-blue-100"} `}>
                <p className={`${sentByMe ? "text-white" : "text-black"}`}>{text}</p>
            </div>
            <div className={`absolute bottom-2 w-0 h-0
            ${sentByMe ? "-right-1.5 border-l-8 border-l-blue-500" 
            : "-left-1.5 border-r-8 border-r-blue-100"}
            border-t-8 border-t-transparent
            border-b-8 border-b-transparent`}/>
        </div>
    )
}
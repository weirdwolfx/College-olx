import { useRef } from "react"
import { useParams } from "react-router-dom"
import socket from "../../socket"

export default function MessageInput({ customClass="" }) {

    const inputRef = useRef(null)
    const { id } = useParams()

    function sendMessage(formData) {
        const text = formData.get("message")
        if (!text.trim()) return

        const msgObj = {
            _id: crypto.randomUUID(),
            id,
            text,
            sender: "Alice",
        } 

        socket.emit('sendMessage', msgObj)
        inputRef.current?.focus()

        console.log(msgObj)
    }

    return (
        <section className={`px-2 py-2.5 border-t-2 ${customClass}`}>
            <form className="flex gap-4 items-center" action={sendMessage}>
                <textarea
                    ref={inputRef}
                    name="message"
                    type="text"
                    placeholder="Message"
                    className="w-full rounded-full h-9 border-2 py-1 px-3 max-w-2/3 resize-none"
                />
                <button type="submit" className="rounded-full p-1 flex justify-center items-center" aria-label="send message">
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
                </button>
            </form>
        </section>
    )
}
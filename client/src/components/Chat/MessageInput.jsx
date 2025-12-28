export default function MessageInput({ setMessages, customClass="" }) {

    function sendMessage(formData) {
        const text = formData.get("message")
        if (!text.trim()) return

        const msgObj = {
            id: crypto.randomUUID(),
            text,
            sentByMe: true,
        }
        setMessages((prevMessages) => [...prevMessages, msgObj])
    }

    return (
        <section className={`px-2 py-2.5 border-t-2 ${customClass}`}>
            <form className="flex gap-4 items-center" action={sendMessage}>
                <textarea
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
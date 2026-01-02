import { Link } from "react-router-dom"

export default function ChatHeader({ user, customClass="" }) {
    return (
        <section className={`border-b-2 py-2 px-2.5 flex items-center gap-2.5 ${customClass}`}>
            <Link
                to="/message"
            >
                <svg className="block md:hidden" xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
            </Link>
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="https://www.shutterstock.com/image-photo/side-profile-happy-golden-retriever-600nw-2476395703.jpg" alt="profile pic"
                    className="object-cover h-full" />
            </div>
            <p>{user}</p>
        </section>
    )
}
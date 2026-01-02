import { Link } from "react-router-dom"

export default function ChatList({ roomId, user }) {
    return (
        <Link
            to={`/message/${roomId}`}
            className={`
                border-b w-full cursor-pointer border-b-gray-200 py-2 px-2.5 flex items-center gap-2.5
            `}>
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="https://www.shutterstock.com/image-photo/side-profile-happy-golden-retriever-600nw-2476395703.jpg" alt="profile pic"
                    className="object-cover h-full" />
            </div>
            <p>{user}</p>
        </Link>
    )
}
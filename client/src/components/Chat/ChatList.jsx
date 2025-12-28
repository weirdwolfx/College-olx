export default function ChatList({ currentUser, user, setUser }) {
    return (
        <button 
            onClick={() => setUser(user)}
            className={`
                border-b w-full cursor-pointer border-b-gray-200 py-2 px-2.5 flex items-center gap-2.5
                ${(currentUser == user) ? 
                "bg-blue-100 border-l-4 border-l-black" :
                "bg-white"
                } 
            `}>
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="https://www.shutterstock.com/image-photo/side-profile-happy-golden-retriever-600nw-2476395703.jpg" alt="profile pic"
                    className="object-cover h-full" />
            </div>
            <p>{user}</p>
        </button>
    )
}
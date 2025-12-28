import ChatList from "./ChatList"

export default function Sidebar({ currentUser, users, setUser, customClass="" }) {

    const userElements = users.map((user, id) => {
        return (
            <ChatList 
                key={id}
                user={user}
                currentUser={currentUser}
                setUser={setUser} 
            />
        )
    })

    return (
        <aside className={`pt-8 ${customClass}`}>
            {userElements}
        </aside>
    )
}
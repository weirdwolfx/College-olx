import ChatList from "./ChatList"

import msgs from "../../assets/chat"

export default function Sidebar({ customClass="" }) {

    const users = Object.keys(msgs)

    const userElements = users.map((user, id) => {
        return (
            <ChatList 
                key={id}
                roomId={user}
                user={user}
            />
        )
    })

    return (
        <aside className={`border-r-2 pt-8 ${customClass}`}>
            {userElements}
        </aside>
    )
}
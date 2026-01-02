import { Routes, Route } from "react-router-dom"

import ChatLayout from "./ChatLayout"
import ChatRoom from "./ChatRoom"
import ChatHome from "./ChatHome"

export default function ChatRouter() {
    return (
        <Routes>
            <Route element={<ChatLayout />}>
                <Route index element={<ChatHome />} />
                <Route path=":id" element={<ChatRoom />} />
            </Route>
        </Routes>
    )
}
import React from "react"
import { useParams, Outlet } from "react-router-dom"

import Sidebar from "./ChatSidebar"

export default function ChatLayout() {

    const { id } = useParams()

    return (
        <div className="h-full md:grid-cols-4 md:grid rounded-xl bg-white overflow-hidden drop-shadow-lg">
            <Sidebar  
                customClass={`md:col-span-1 ${id ? "hidden md:block" : "block"}`} 
            />

            <Outlet />
        </div>
    )
}

import { Link } from "react-router-dom"

export default function BackButton({ to = "/", label = "Back to Browse" }) {

    return (
        <Link to={to} className="flex items-center gap-2">
            <div className="bg-white rounded-full p-0.5 drop-shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg>
            </div>
            <p className="text-lg font-semibold">{label}</p>
        </Link>
    )
}

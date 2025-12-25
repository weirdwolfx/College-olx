import { useNavigate } from "react-router-dom"

export default function BackButton({ to = "/", label = "Back to Browse" }) {
  const navigate = useNavigate()

  return (
    <div className="max-w-5xl mx-auto px-4 py-2">
      <button
        onClick={() => navigate(to)}
        className="
          group inline-flex items-center gap-2
          px-3 py-1.5 rounded-full
          border border-gray-300
          text-xs font-medium text-gray-600
          bg-white
          hover:border-black hover:text-black
          transition-all duration-150
        "
      >
        <span className="transition-transform group-hover:-translate-x-1">
          ←
        </span>
        {label}
      </button>
    </div>
  )
}

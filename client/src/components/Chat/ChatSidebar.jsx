export default function Sidebar({ customClass="" }) {
    return (
        <aside className={`p-4 ${customClass}`}>
            <p>This is chat sidebar</p>
        </aside>
    )
}
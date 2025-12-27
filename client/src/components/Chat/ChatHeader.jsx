export default function ChatHeader() {
    return (
        <section className="shadow-md py-2 px-2.5 flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="https://www.shutterstock.com/image-photo/side-profile-happy-golden-retriever-600nw-2476395703.jpg" alt="profile pic"
                    className="object-cover h-full" />
            </div>
            <p>John Doe</p>
        </section>
    )
}
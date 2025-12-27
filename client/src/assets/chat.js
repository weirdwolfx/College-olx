const msgs = {
    "alice": [
        { id:crypto.randomUUID() ,text: "Hi", sentByMe:false },
        { id:crypto.randomUUID() ,text: "How are you", sentByMe:false },
        { id:crypto.randomUUID() ,text: "Yeah i am good, Wbu?", sentByMe:true },
        { id:crypto.randomUUID() ,text: "Wanna meet sometime", sentByMe:false },
    ],
    "bob": [
        { id:crypto.randomUUID() ,text: "Hey bro, wanna play Minecraft sometime?", sentByMe:false },
        { id:crypto.randomUUID() ,text: "Yeah sure", sentByMe:true },
        { id:crypto.randomUUID() ,text: "Cool", sentByMe:false },
    ]
}

export default msgs
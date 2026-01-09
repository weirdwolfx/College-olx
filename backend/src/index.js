const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)

const io = socketio(server, {
    cors: {
        origin:["http://localhost:5173"],
        credentials: true
    }
})


io.on('connection', (socket) => {
    
    socket.on('joinRoom', ({ id }) => {

        socket.join(id)
        console.log(`Socket ${socket.id} joined on room ${id}`)

        socket.on('sendMessage',async (msg) => {
            try {
                // post message
            } catch (error) {
                console.log(error)
            }
            io.to(id).emit('getMessage', msg)
        })

        socket.on('leaveRoom', ({ id }) => {
            socket.leave(id)
        })

    })
})



const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
})
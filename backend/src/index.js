import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import testRoutes from "./routes/test.routes.js";
import listingRoutes from "./routes/listing.routes.js";
import http from "http"
import { Server } from "socket.io";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Backend running");
});
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/listings", listingRoutes);

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173"],
        credentials: true
    }
})

io.on('connection', (socket) => {

    socket.on('joinRoom', ({ id }) => {

        socket.join(id)
        console.log(`Socket ${socket.id} joined on room ${id}`)

        socket.on('sendMessage', async (msg) => {
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

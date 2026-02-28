import { Server } from "socket.io"
import { app } from "./app.js"
import { initSockets } from "./socket/index.js";
import { httpServer } from "./app.js";


export const io = new Server(httpServer, {
    cors: {
        origin: true,
        credentials: true
    }
})

initSockets(io);
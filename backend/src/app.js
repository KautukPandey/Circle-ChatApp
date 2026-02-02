import express from "express";
import userRouter from "./routes/user.routes.js";
import cors from "cors"
import cookieParser from "cookie-parser"

import { createServer } from "http"
import { Server } from "socket.io"

const app = express()

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

const httpServer = createServer(app);
app.use(express.urlencoded({ extended: true }));


const io = new Server(httpServer, {
    cors: {
        origin: true
    }
})

app.use("/users",userRouter)

export default app
import express from "express";
import userRouter from "./routes/user.routes.js";
const cookieParser = require('cookie-parser')
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use("/users",userRouter)

export default app
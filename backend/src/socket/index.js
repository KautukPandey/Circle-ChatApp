import { registerMessageHandlers } from "./message.handler.js";
import { registerRoomHandlers } from "./room.handler.js";

export const initSockets = (io) => {
    io.on("connection", (socket) => {
        registerMessageHandlers(io, socket);
        registerRoomHandlers(io, socket);
    })
}
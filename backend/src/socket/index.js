import { registerMessageHandlers } from "./message.handler";
import { registerRoomHandlers } from "./room.handler";

export const initSockets = (io) => {
    io.on("connection", (socket) => {
        registerMessageHandlers(io, socket);
        registerRoomHandlers(io, socket);
    })
}
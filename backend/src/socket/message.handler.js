import { Server } from "socket.io";
import { createMessage } from "../services/message.service.js";

export const registerMessageHandlers = (io, socket) => {
    socket.on("room-messages", async (payload, callback) => {
        try {
            const { roomId, msg } = payload;

            if (!socket.rooms.has(roomId)) {
                return callback({ ok: false });
            }

            const message = await createMessage({
                roomId,
                sender: msg.sender,
                text: msg.text
            });

            socket.to(roomId).emit("room-messages", message);

            callback({ ok: true });
        } catch (error) {
            callback({ ok: false });
        }
    });
};
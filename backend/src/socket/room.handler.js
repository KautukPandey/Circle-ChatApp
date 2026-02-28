import { getRoomMessages } from "../services/message.service";

const users = new Map();
const typingUsers = new Map();

export const registerRoomHandlers = (io, socket) => {
    socket.on("join-room", 
        async({roomId, username}) => {
            socket.join(roomId);

            const prev = users.get(roomId) ?? [];
            users.set(roomId, [...prev, username]);

            socket.to(roomId).emit("joined-user", username);

            io.to(roomId).emit("joined-user", username);

            try{
                const {messages} = await getRoomMessages({roomId});
                socket.emit("room-history", messages);
            }
            catch(error) {
                console.error("Failed to fetch old messages", error);
            }
        }
    )

    socket.on("leave-room", ({roomId, username}) => {
        socket.leave(roomId);
        const prev = users.get(roomId) ?? [];
        const updated = prev.filter(u => u !== username);

        updated.length == 0 ? users.delete(roomId) : users.set(roomId, updated);

        typingUsers.get(roomId)?.delete(username);

        io.to(roomId).emit("left-user", username);

        io.to(roomId).emit("room-users", users.get(roomId) ?? [])
    })


    socket.on("user-type", ({roomId, username}) => {
        if(!typingUsers.has(roomId)) {
            typingUsers.set(roomId, new Set());
        }

        const roomTyping = typingUsers.get(roomId);
        roomTyping.add(username);

        socket.to(roomId).emit("typing-user", Array.from(roomTyping));

        
    })
}
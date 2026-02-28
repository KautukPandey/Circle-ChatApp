import mongoose from "mongoose";
import { Message } from "../models/message.model.js";

const getRoomMessages = async ({roomId, cursor = null, limit = 40}) => {
    const query = {roomId};
    
    if(cursor) {
        query._id = { $lt: new mongoose.Types.ObjectId(cursor)};
    }

    const messages = await Message.find(query)
    .sort({_id: 1})
    .limit(limit+1)

    const hasMore = messages.length > limit;

    if(hasMore) {
        messages.pop();
    }

    const lastMessage = messages.at(-1);

    return {
        messages: messages.reverse(),
        nextCursor: lastMessage ? lastMessage._id.toString() : null,
        hasMore
    }
}

const createMessage = async ({roomId, sender, text}) => {
    const message = await Message.create({
        roomId,
        sender,
        content: text,
        status:  "sent"
    })

    return message;
}

export { getRoomMessages, createMessage };
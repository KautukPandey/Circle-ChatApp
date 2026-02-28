import { asyncHandler } from "../utils/asyncHandler.js"
import { getRoomMessages, createMessage } from "../services/message.service.js";

const getRoomMessageHistory = asyncHandler( async (req, res) => {
    const {roomId} = req.params;
    const { cursor = null, limit = 40} = req.body;

    if(!roomId){
        return res.status(400).json({error: "RoomId is required!"});
    }

    const result = await getRoomMessages(
        {
            roomId,
            cursor, 
            limit
        }
    )

    return res.status(200).json(result);
})


const createRoomMessages = asyncHandler( async (req, res) => {
    
    const { roomId } = req.params;
    const { sender, text } = req.body;

    if(!roomId) {
        return res.staus(400).json({ error: "roomId is required!"});
    }

    const message = await createMessage({
        roomId, 
        sender,
        text
    })

    return res.status(201).json(messsage);
})

export {createRoomMessages, getRoomMessageHistory};

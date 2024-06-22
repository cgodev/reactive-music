// Config
import { config } from "../../config";

function generateRoomUrl(roomId = null, fullUrl = false){
    if(fullUrl && roomId){
        return `${config().appUrl}/room/${roomId}`;
    } else if(roomId){
        return `/room/${roomId}`;
    } else {
        return `${config().appUrl}/room`;
    }
}

export {
    generateRoomUrl
}
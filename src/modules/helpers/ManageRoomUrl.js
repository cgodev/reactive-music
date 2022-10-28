function generateRoomUrl(roomId = null){
    if(roomId){
        return `/room/${roomId}`;
    }

    return "http://localhost:3000/room";
}

export {
    generateRoomUrl
}